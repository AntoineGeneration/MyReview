const commentaire = require('../models/Comments').Commentaire;
//import { v4 as uuidv4 } from 'uuid';
//const uuidv4=require('uuid');


const comment1 = new commentaire({

    id_publication : 'publ 1',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment2 = new commentaire({

    id_publication : 'publ 1',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});
const comment3= new commentaire({

    id_publication : 'publ 2',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment4 = new commentaire({

    id_publication : 'publ1',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment5 = new commentaire({

    id_publication : 'publ2',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment6 = new commentaire({

    id_publication : 'publ4',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment7 = new commentaire({

    id_publication : 'publ5',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment8 = new commentaire({

    id_publication : 'publ4',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment9 = new commentaire({

    id_publication : 'publ5',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});

const comment10 = new commentaire({

    id_publication : 'publ6',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});


const comment11 = new commentaire({

    id_publication : 'publ7',
    date_comment : new Date(),
    contents: Math.floor(0+Math.random()*1000000)+"",
    images : ""
});



module.exports =[
    comment1,
    comment2,
    comment3,
    comment4,
    comment5,
    comment6,
    comment7,
    comment8,
    comment9,
    comment10,
    comment11
];