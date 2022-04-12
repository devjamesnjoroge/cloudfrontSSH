import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards!: Card[];

  constructor() {

    this.cards = [

      new Card("step 1: DROPBEAR", ["sudo apt install dropbear squid stunnel cmake make gcc build-essential nodejs unzip zip tmux", "edit /etc/default/dropbear", "0, 40000,nothing,path to banner"]),
      new Card("step 2: UDPGW", ["wget https://github.com/ambrop72/badvpn/archive/master.zip", "unzip master.zip", "mkdir build && cd build", "cmake .. -DCMAKE_INSTALL_PREFIX=<install-dir> && make install (sudo)"]),
      new Card("step 3: JAVA PROXY INSTALLATION", ["cd /etc/stunnel", "wget https://gitlab.com/PANCHO7532/scripts-and-random-code/-/raw/master/nfree/proxy3.js", "zero ssl { cat private.key certificate.crt ca_bundle.crt > stunnel.pem", "systemctl enable stunnel4 && system start stunnel4"]),
      new Card("step 4: BADVPN", ["cd /etc/systemd/system", "wget https://gitlab.com/PANCHO7532/scripts-and-random-code/-/raw/master/nfree/badvpn.service", "systemctl enable badvpn && system start badvpn"]),
      new Card("step 5: OPTIONAL - PASSWORD", ["vi /etc/pam.d/common-password && delete enforce-for-root"]),
      new Card("step 6: EDIT SHELL", ["cd /etc/shells", "add these lines: /bin/false, /usr/sbin/nologin"]),
      new Card("step 7: USERS", ["Add user> useradd -M username -s /bin/false", "Delete user> userdel -r-f username", "change password> passwd username"])


    ]

  }

  toggleDetails(index: any) {
    this.cards[index].showDetails = !this.cards[index].showDetails
  }

  finishDelete(isRead: any, index: any) {
    if (isRead === true) {
      this.cards.splice(index, 1)
    }
  }

  addItem(addNewItem: any) {

    this.cards.push(addNewItem)

    console.log(addNewItem)

  }



  upVote(x: boolean, index: number) {
    if (x === true && index == index) {
      this.cards[index].n++
    }
  }

  downVote(x: boolean, index: number) {
    if (x === true && index == index) {
      this.cards[index].u--
    }
  }



  ngOnInit() {



  }

}
