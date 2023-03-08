import { Component, ElementRef, ViewChild } from '@angular/core';
import {ProduitModel} from "../Models/produit";
import {catchError, Observable, throwError} from "rxjs";
import {ProduitServiceService} from "../Services/produit-service.service";
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../Models/Commentaire";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
//commentaire !: Commentaire;
ListProduits! : Observable<Array<ProduitModel>>;

ErrorMessage! : string;

//Commentaires
  showCommentBox : boolean = false;
  comment :string  = '';

  @ViewChild('commentTextarea', {static: false}) commentTextarea!: ElementRef ;

  constructor(private produitService: ProduitServiceService,private  http: HttpClient) {

  }

  ngOnInit() : void{


    this.ListProduits=this.produitService.getAllproducts().pipe(catchError(err=>{
      this.ErrorMessage=err.message;
      return throwError(err);
    }));


  }

  openCommentBox() {
    this.showCommentBox = true;
  }

  closeCommentBox() {
    this.showCommentBox = false;
  }

  submitComment() {
    // Envoyer le commentaire via une requête HTTP ou tout autre traitement nécessaire
    // ...
    // Fermer la boîte de saisie de commentaire
    this.closeCommentBox();
  }

  // Définissez une fonction pour redimensionner automatiquement le textarea
  redimensionnerTextarea() {
    setTimeout(() => {
      const textarea = document.getElementsByTagName('textarea')[0];
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, 10);
  }


  Supprimer(id :string) {
   let produit : ProduitModel;
    this.produitService.SupprimerProduit(id).pipe(catchError(err => {
      return throwError(err);
    }));

  }
}
