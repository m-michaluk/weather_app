import {combineEpics} from 'redux-observable';
import {searchEpics} from "./containers/search/epics";
import {gifEpics} from "./containers/gif/epics";

export const rootEpic = combineEpics(searchEpics, gifEpics);
