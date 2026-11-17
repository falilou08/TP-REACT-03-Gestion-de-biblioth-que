const users=[
    {prenom:'Fatou',nom:'Fall',etat:0,age:18,role:'admin'},
    {prenom:'modou',nom:'Diop',etat:1,age:24,role:'user'},
    {prenom:'cherif',nom:'sow',etat:1,age:27,role:'admin'},
    {prenom:'chamsidine',nom:'aidara',etat:1,age:21,role:'user'},
    {prenom:'bachir',nom:'sarr',etat:1,age:25,role:'admin'}
];
// creer une fonction nommee getAdmins qui prend en parametre un tableau d'utilisateurs et 
// retourne un tableau contenant uniquement les utilisateurs ayant le role 'admin'

const getAdmins = (users) => {
    return users.filter(user => user.role === 'admin');
};

console.log(getAdmins(users));
// un autre méthode avec forEach
const getAdminsForEach = (users) => {
    let admins = [];
    users.forEach(user => {
        if (user.role === 'admin') {
            admins.push(user);
        }
    });
    return admins;
};

console.log(getAdminsForEach(users));

let u={prenom:'Fatou',nom:'Fall',etat:0,age:18,role:'admin'};

//pour chaque variable crée,recuperer le pprenom,nom,etat,age et role de l'utilisateur u et les afficher dans la console
let prenom = u.prenom;
let nom = u.nom;
let etat = u.etat;
let age = u.age;
let role = u.role;
console.log(nom,prenom,etat,age,role);
//destrucuration
let { prenom: firstName, nom: lastName, etat: userState, age: userAge, role: userRole } = u;
console.log(firstName, lastName, userState, userAge, userRole);
// un tableau contenant les prenom et les roles des utilisateurs et afficher le tableau dans la console
const usersSummary = users.map(({ prenom, role }) => ({ prenom, role }));
console.log(usersSummary);



// en utilisant la destructuaration recuperer le premier utilisateur et le mettre dans un e variable nommer user1 et le troisieme dans user3 et ignorer le deuxieme
// les spread operator
// creer un autre tableau appelé equipe contenant toutes les données du premier tableau plus un nouvel utilisateur à la fin du tableau ensuite afficher le tableau equipe sans utiliser push
// changer l'etat de l'utlisateur Fatou Fall à 1 et afficher le tableau equipe

const [user1, , user3] = users;
console.log(user1, user3);

const nouvelUtilisateur = {
    prenom: 'Aminata',
    nom: 'Ndiaye',
    etat: 1,
    age: 22,
    role: 'user'
};
let equipe = [...users, nouvelUtilisateur];
console.log(equipe);

equipe = equipe.map(user =>
    user.prenom === 'Fatou' && user.nom === 'Fall'
        ? { ...user, etat: 1 }
        : user
);
console.log(equipe);
