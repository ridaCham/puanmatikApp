import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public mat:any=0;
  public fen:any=0;
  public sos:any=0;
  public tur:any=0;
  public sonuc:any=0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mat=localStorage.getItem('matNot');
    this.fen=localStorage.getItem('fenNot');
    this.sos=localStorage.getItem('sosNot');
    this.tur=localStorage.getItem('turNot');
    this.sonuc=localStorage.getItem('sonucValue');
   }
hesapla(){
  localStorage.setItem('matNot',this.mat);
  localStorage.setItem('fenNot',this.fen);
  localStorage.setItem('sosNot',this.sos);
  localStorage.setItem('turNot',this.tur);
  if(this.mat==0 && this.fen==0 && this.tur==0 && this.sos==0){
    this.sonuc=0
  }
  else{
  this.sonuc=100+this.mat*3.3+this.sos*3.4+this.fen*3.4+this.tur*3.3;
    }
  localStorage.setItem('sonucValue',this.sonuc);
}
}
