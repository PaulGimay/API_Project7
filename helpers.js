/*
Nous allons avoir une fonction qui va gérer les erreurs
Nous allons englober toutes nos fonctions async dedans.
C'est une fonction High Order Function, c'est une fonction qui va prendre en fonction une autre fonction
*/ 


// next va servir de passer à la prochaine fonction, afin d'éviter d'être bloqué
export const catchErrors = fn => (req, res, next) => {
 return fn(req, res, next).catch(next)
}

