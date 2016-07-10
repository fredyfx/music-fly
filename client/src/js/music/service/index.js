require('./player-controls.service.js');
require('./playlist-constructor.service.js');
require('./playlists.service.js');
require('./sc-search.service.js');
require('./search-type.service.js');
require('./song-constructor.service.js');
require('./spotify-search.service.js');
require('./spotify-search.service.js');
require('./tabs.service.js');
require('./TrackList.service.js');

import {NumberConverter} from './numberConverter.service.ts';

angular.module('musicApp')
 .service('numberConverter', NumberConverter)