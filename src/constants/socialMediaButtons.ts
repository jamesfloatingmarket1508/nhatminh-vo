import githubURL from '../../public/icons/github.svg';
import linkedinURL from '../../public/icons/linkedin.svg';
import rocketseatURL from '../../public/icons/rocketseat.svg';
import sourceURL from '../../public/icons/source.svg';
import twitterURL from '../../public/icons/twitter.svg';

export const socialMediaButtons = {
   Twitter: {
      icon: twitterURL,
      url: 'https://www.twitter.com/cleissonom',
      color: '#1DA1F2'
   },
   Github: {
      icon: githubURL,
      url: 'https://www.github.com/cleissonom',
      color: '#333333'
   },
   Linkedin: {
      icon: linkedinURL,
      url: 'https://www.linkedin.com/in/cleissonom',
      color: '#0077B5'
   },
   Source: {
      icon: sourceURL,
      url: 'https://github.com/cleissonom/personal-website',
      color: '#1E741E'
   },
   Rocketseat: {
      icon: rocketseatURL,
      url: 'https://app.rocketseat.com.br/me/cleissonom',
      color: '#8257e5'
   }
}

export type socialMediaButtonsType = typeof socialMediaButtons;