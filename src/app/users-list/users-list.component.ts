import {Component, OnInit} from '@angular/core';
import {UsersDataService} from "./users-data.service";

interface IUser {
  id: number,
  email: string,
  group_id: number,
  birth_date: string,
}

export interface INav {
  id: number,
  name: string,
  items: IGroup[]
}

export interface IGroup {
  id: number;
  name: string;
  parent_id?: number | null
}


// export interface IGroup {
//   groupId: number,
//   name: string,
//   items: any,
//   isDropDownMenu: boolean
// }

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  navs: INav[] = [];
  users: IUser[] = [];

  isVisible: any[] = [];
  index: number | undefined;

  selected: any;
  youngestUser: string[] = [];
  oldestUser: string[] = [];
  averageAge: Date | string | undefined;
  selectedIndex: number | null = null;

  constructor(private _uds: UsersDataService) {

  }

  ngOnInit(): void {
    this.getMainGroupsName();
  }


  toggleSubMenu(index: number) {
    this.selectedIndex = index;
    if (this.index !== index) {
      this.isVisible = [];
      this.index = index;
      this.isVisible[index] = true;
    }

    if (this.isVisible[index] = undefined)
      this.isVisible[index] = false;
    else
      this.isVisible[index] = true;
  }


  showUsersById(id: number) {
    this._uds.getUsersById(id).subscribe((data: any) => {
      this.users = data;

      let youngestUser = this.users.sort((a: IUser, b: IUser) => new Date(b.birth_date).getTime() - new Date(a.birth_date).getTime());

      this.youngestUser = youngestUser[0].email.split('@');
      this.oldestUser = youngestUser[youngestUser.length - 1]?.email.split('@');
      this.averageAge = new Date(data.reduce((prev: any, user: any) => prev + new Date(user.birth_date).getTime(), 0) / data.length);

console.log(this.averageAge)

    })

  }

  getMainGroupsName() {
    this._uds.getGroups().subscribe((data: any) => {
      data.forEach((item: any) => {
        if (!item.parent_id) return;
        this.navs.push({
          id: item.id,
          name: item.name,
          items: data.filter((el: any) => {
            return el.parent_id === item.id
          })
        })
      });
    })
  }


  select(item: any) {
    this.selected = (this.selected === item ? null : item);
  }

  isActive(item: any) {
    return this.selected === item;
  }

}
