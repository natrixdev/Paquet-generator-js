console.log("Paquet number").then
  only if (response === num")
    else console.log("Pls provide a num")
      else ("Server ip?")
      print("starting")
    
   gen. 
    
import { _upload } from "./UPLOADS/upload";
import { _localDate, _localdateTime } from "./DATES/Date";
import { _lout, _uStore } from "./CONFIGS/api";
import { _CRUD } from "./request/crud";

/**
 * @param {*} type d'operation http a effectuer
 * @param {*} url url a soumettre
 * @param {*} datas donnees a envoyer
 * @param {*} callback la fonction a executer
 * @returns
 */
export const _request = (type, url, datas, callback) => {
  return _CRUD(type, url, datas, callback);
};

/**
 * Permet de faire l'upload des fichiers
 * @param {*} files
 */
export const _upload = (files, callback) => {
  return _upload(files, callback);
};

/**
 * Met à jour les informations du store
 * @param {*} item L'element a modifier
 * @param {*} newDatas Les nouvelles entrées
 */
export const _updateStore = (item, newDatas) => {
  _uStore(item, newDatas);
};

/**
 * Fonction permettant de deconncter un user
 * @param {*} e
 */
export const _logout = (e) => {
  return _lout(e);
};

/**
 *
 * @param {*} date la date a formater
 * @returns format local renvoyer
 */
export const _convertNormalDate = (date) => {
  return _localDate(date);
};

/**
 *
 * @param {*} date date a formater et l'heure
 * @returns le format a renvoyer pour avoire l'heure
 */
export const _convertDateTime = (date) => {
  return _localdateTime(date);
};
