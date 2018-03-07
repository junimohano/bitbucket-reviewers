
// const teamDragonMembers = ['Anna Bondar', 'Maksym Inhul', 'Liberty Chisasuro', 'Jay West'];
// const teamNinjaMembers = ['Viktor Deyneka', 'Mark Angus'];

// // element.insertBefore(para, child);


// // Read it using the storage API
// chrome.storage.sync.get(['foo', 'bar'], function (items) {

//   console.log(`local loaded ${items.foo}`);

//   // message('Settings retrieved', items);
// });

// // this.port.on('getElements', () => {
// //   // Window.local
// //   console.log(`local loaded ${localStorage.getItem('jun')}`); // console.log(`session loaded ${sessionStorage.getItem('jun2')}`);
// // });



// const displayName = this.getDisplayName();

// const teamDragonBtn = this.createTeamButton('Team Dragon');
// const teamNinjaBtn = this.createTeamButton('Team Ninja');
// const resetBtn = this.createTeamButton('Reset');

// teamDragonBtn.addEventListener('click', () => this.clickAddTeamMembersToReviewers(teamDragonMembers));
// teamNinjaBtn.addEventListener('click', () => this.clickAddTeamMembersToReviewers(teamNinjaMembers));
// resetBtn.addEventListener('click', () => this.clickResetTeamMembers());

// this.bindTeamButtonToReviewersGroup(teamDragonBtn);
// this.bindTeamButtonToReviewersGroup(teamNinjaBtn);
// this.bindTeamButtonToReviewersGroup(resetBtn);

// function bindTeamButtonToReviewersGroup(btn) {
//   const reviewersGroup = document.getElementById('id_reviewers_group');
//   reviewersGroup.appendChild(btn);
// }

// function createTeamButton(teamName) {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   const node = document.createTextNode(teamName);
//   btn.appendChild(node);

//   return btn;
// }

// function clickAddTeamMembersToReviewers(listOfTeamMembers) {
//   const availableMembers = document.getElementsByClassName('aui-button aui-button-link');

//   const teamMembers = Array.prototype.filter.call(availableMembers, (availableMember) =>
//     listOfTeamMembers.find(x => x === availableMember.innerHTML && x !== this.displayName)
//   );

//   if (teamMembers.length > 0) {
//     teamMembers[0].click();
//   }

//   if (teamMembers.length > 1) {
//     setTimeout(() => this.clickAddTeamMembersToReviewers(listOfTeamMembers), 100);
//   }
// }

// function clickResetTeamMembers() {
//   const availableReviewers = document.getElementsByClassName('select2-search-choice-close');
//   const reviewers = Array.prototype.filter.call(availableReviewers, (availableReviewer) =>
//     availableReviewer.tagName === 'A');

//   if (reviewers.length > 0) {
//     reviewers[0].click();
//   }

//   if (reviewers.length > 1) {
//     setTimeout(() => this.clickResetTeamMembers(), 100);
//   }
// }

// function getDisplayName() {
//   const metas = document.getElementsByTagName('meta');
//   for (let i = 0; i < metas.length; i++) {
//     return JSON.parse(metas[i].getAttribute('data-current-user')).displayName;
//   }

//   return '';
// }
