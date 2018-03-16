const currentUserDisplayName = this.getCurrentUserDisplayName();
const currentUserName = this.getCurrentUserName();
const authorUserName = getAuthorUserName();

browser.storage.sync.get('groups')
  .then(
    (items) => {
      if (items.groups) {
        items.groups.forEach(group => {
          const groupButton = this.createTeamButton(group.name);
          groupButton.addEventListener('click', () => this.clickAddTeamMembersToReviewers(group.members.map(member => member.name)));
          this.bindTeamButtonToReviewersGroup(groupButton);
        });
      }
    },
    () => { }
  )
  .then(() => {
    const resetBtn = this.createTeamButton('Reset');
    resetBtn.addEventListener('click', () => this.clickResetTeamMembers());
    this.bindTeamButtonToReviewersGroup(resetBtn);
  });

function bindTeamButtonToReviewersGroup(btn) {
  const reviewersGroup = document.getElementById('id_reviewers_group');
  reviewersGroup.appendChild(btn);
}

function createTeamButton(teamName) {
  const btn = document.createElement('button');
  btn.type = 'button';
  const node = document.createTextNode(teamName);
  btn.appendChild(node);
  btn.className = 'button';
  btn.style.cssText = 'margin-top: 10px; margin-right: 10px;';
  return btn;
}

function clickAddTeamMembersToReviewers(listOfTeamMembers) {
  const availableMembers = document.getElementsByClassName('aui-button aui-button-link');

  let teamMembers = Array.prototype.filter.call(availableMembers, (availableMember) =>
    listOfTeamMembers.find(x => x === availableMember.innerHTML));

  if (currentUserName === authorUserName || authorUserName === '') {
    teamMembers = teamMembers.filter(x => x.innerHTML !== currentUserDisplayName);
  }

  if (teamMembers.length > 0) {
    teamMembers[0].click();
  }

  if (teamMembers.length > 1) {
    setTimeout(() => this.clickAddTeamMembersToReviewers(listOfTeamMembers), 50);
  }
}

function clickResetTeamMembers() {
  const availableReviewers = document.getElementsByClassName('select2-search-choice-close');
  const reviewers = Array.prototype.filter.call(availableReviewers, (availableReviewer) =>
    availableReviewer.tagName === 'A');

  if (reviewers.length > 0) {
    reviewers[0].click();
  }

  if (reviewers.length > 1) {
    setTimeout(() => this.clickResetTeamMembers(), 50);
  }
}

function getCurrentUserDisplayName() {
  const attribute = this.getAttributeFromBody('data-current-user');
  return attribute ? attribute.displayName : '';
}

function getCurrentUserName() {
  const attribute = this.getAttributeFromBody('data-current-user');
  return attribute ? attribute.username : '';
}

function getAuthorUserName() {
  const attribute = this.getAttributeFromBody('data-current-pr');
  return attribute ? attribute.author.username : '';
}

function getAttributeFromBody(attributeName) {
  const attribute = document.getElementsByTagName('body')[0].getAttribute(attributeName);
  return attribute ? JSON.parse(attribute) : null;
}
