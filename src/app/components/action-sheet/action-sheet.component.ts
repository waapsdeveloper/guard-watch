import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})
export class ActionSheetComponent  implements OnInit {

  ngOnInit() {}

  @Input() options: { text: string, icon: string, handler: () => void }[] = [];

  constructor(private actionSheetController: ActionSheetController) {}

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: this.options,
    });

    await actionSheet.present();
  }


}
