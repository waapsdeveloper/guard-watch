import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Platform, MenuController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Custom Services
*/
import { SqliteService } from 'src/app/services/sqlite.service';
import { NavService } from './../../services/nav.service';

import { ModalService } from 'src/app/services/basic/modal.service';
import { DatumService } from 'src/app/services/datum.service';
import { PopoversService } from 'src/app/services/popovers.service';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from 'src/app/services/contact.service';
import { PassesService } from 'src/app/services/passes.sevice';
import { InvokeFunctionExpr } from '@angular/compiler';
import { UtilityService } from 'src/app/services/utility.service';
import { NetworkService } from 'src/app/services/network.service';
// import { NetworkService } from 'src/app/services/network.service';
// import { UtilityService } from 'src/app/services/utility.service';
// import { EventsService } from 'src/app/services/events.service';
// import { PopoversService } from 'src/app/services/basic/popovers.service';
// import { UserService } from 'src/app/services/user.service';

// import { PermissionsService } from 'src/app/services/permissions.service';
// import { FormatPhoneService } from 'src/app/services/format-phone.service';


export abstract class BasePage {
    public platform: Platform;
    public formBuilder: FormBuilder;
    public domSanitizer: DomSanitizer;

    /*
      Custom Services
    */
    public datum: DatumService;
    public popover: PopoversService;
    public sqlite: SqliteService;
    public nav: NavService;
    public modals: ModalService;
    public passes: PassesService;
    public network: NetworkService;
    public utility: UtilityService;

    // public events: EventsService;
    // public popover: PopoversService;
    public users: UserService;

    // public permissions: PermissionsService;
    // public fphs: FormatPhoneService;
    // public storedContactsService: StoredContactsService;

    constructor(injector: Injector) {
        this.platform = injector.get(Platform);
        this.domSanitizer = injector.get(DomSanitizer);
        this.formBuilder = injector.get(FormBuilder);
        /*
          Custom Services
        */
        this.sqlite = injector.get(SqliteService);
        this.nav = injector.get(NavService);
        this.modals = injector.get(ModalService);
        this.datum = injector.get(DatumService);
        this.popover = injector.get(PopoversService);
        // this.contact = injector.get(ContactService);
        this.users = injector.get(UserService);
        this.users = injector.get(UserService);
        this.passes = injector.get(PassesService);
        this.network = injector.get(NetworkService);
        this.utility = injector.get(UtilityService);
        // this.events = injector.get(EventsService);


        // this.popover = injector.get(PopoversService);

        // this.menuCtrl = injector.get(MenuController);
        // this.permissions = injector.get(PermissionsService);

        // this.fphs = injector.get(FormatPhoneService);
    }


}
