/**
 * @name GondonyaPlugin
 * @author Helight59
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.2
 * @source https://github.com/helight59/GondonyaPlugin/blob/main/gondonya.plugin.js
 * @updateUrl https://raw.githubusercontent.com/helight59/GondonyaPlugin/main/gondonya.plugin.js
 */

module.exports = class GondonyaPlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      const testName = 'Арбузная свинья 🍉';
      const allSidebarUsersBlocks = Array.from(document.querySelectorAll('.member-2gU6Ar.member-48YF_l'));

      allSidebarUsersBlocks.forEach(userBlock => {
        console.log('this.testFunc()', this.testFunc);
        this.testFunc();

        const userName = userBlock.querySelector('.username-i5-wv- .username-u-ebrn').innerText;

        console.log(userName, userName === testName);
        if (userName === testName) {
          const gameName = userBlock.querySelector('.username-i5-wv- .username-u-ebrn').innerText;
          userBlock.classList.add("userSidebarCard");
        }
      });

      const allNames = Array.from(document.querySelectorAll('.username-i5-wv- .username-u-ebrn')).map(block => block.innerText);
      BdApi.showToast("allNames", allNames);
      // const gameName = document.querySelector("#app-mount div.subText-OGOWMj > div > div:nth-child(1) > strong");
      BdApi.injectCSS("GondonyaPlugin", `
        #app-mount .userSidebarCard {
          position: relative;
        }

        #app-mount .userSidebarCard > div {
          position: relative;
          z-index: 2;
        }

        #app-mount .userSidebarCard:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background-image: url('https://wow.zamimg.com/uploads/blog/images/30444-watch-the-overwatch-league-playoffs-for-free-cosmetics.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        #app-mount .userSidebarCard .wrapper-1VLyxH {
          box-shadow: 0 0 2px 5px #00000094;
        }
        
        #app-mount .userSidebarCard .username-i5-wv- .username-u-ebrn {
          text-shadow: 0 0 2px 5px #00000094;
        }

        #app-mount .userSidebarCard .nameAndDecorators-3ERwy2 {
          padding: 0 2px;
          border-radius: 4px;
          background-color: #0000006e;
        }

        #app-mount .userSidebarCard .activityText-1rR-8O {
          text-shadow: 2px 2px 1px #000000;
          padding: 0 2px;
          border-radius: 4px;
          background-color: #00000040;
          margin-top: 4px;
        }
        
        #app-mount .userSidebarCard .avatar-6qzftW .wrapper-1VLyxH {
          box-shadow: 0 0 2px 5px #00000094;
        }
      `);
    }

    testFunc() {
      const allSidebarUsersBlocks = Array.from(document.querySelectorAll('.member-2gU6Ar.member-48YF_l'));
      console.log('testFunc', allSidebarUsersBlocks);
    }

    stop() {
      const allSidebarUsersBlocks = Array.from(document.querySelectorAll('.member-2gU6Ar.member-48YF_l'));
      allSidebarUsersBlocks.forEach(userBlock => userBlock.classList.remove("userSidebarCard"));
    }
}