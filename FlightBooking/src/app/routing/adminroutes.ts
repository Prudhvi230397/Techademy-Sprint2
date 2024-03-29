import { AddAirlineComponent } from "../admin/addairline.component";
import { AddinventoryComponent } from "../admin/addinventory.component";
import { AdminComponent } from "../admin/admin.component";
import { AuthguardService } from "../services/authguard.service";

export const Adminroutes = [
  { path: '', component: AdminComponent },
  { path: 'AddAirline', canActivate : [AuthguardService], component: AddAirlineComponent },
  { path: 'AddInventory',canActivate : [AuthguardService], component: AddinventoryComponent }
];


