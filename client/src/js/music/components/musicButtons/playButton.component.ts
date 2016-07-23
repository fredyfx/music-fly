'use strict';

/**
 * The buttons on the Player
 * All Button components use this controller
 * @module playerInterfaceComponent
 */

export class ButtonsController {
  private tracks: any;
  private song: any;
  private index: number;
  private playState: any;

  constructor (
    private TrackList,
    private $scope,
    private playerControls
  ) {
    'ngInject';

    this.playState = this.playerControls.checkPlayingState();

  }

  public resumeMusic () { 
    this.playerControls.resumeMusic();
  }

  public pauseMusic () {   
    this.playerControls.pauseMusic();
  }

}

export const playButton = {
   templateUrl: require('./play-button.html'),
   controller: ButtonsController,
   bindings: {
    song:'<',
    // changes look depending on where it is
    roleType: '@',
    //Index position of song for playing state
    index: '<'
   }
}
