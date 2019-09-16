import { Component } from "@angular/core";
import { PlayerService } from "./service/player.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  newPlayer = "";
  players = [];
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.readPlayers().subscribe(data => {
      this.players = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"]
        };
      });
    });
  }

  addPlayer() {
    if (this.newPlayer.trim().length > 0) {
      this.playerService
        .createPlayer({ name: this.newPlayer })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.newPlayer = "";
    }
  }

  removePlayer(playerId) {
    this.playerService.deletePlayer(playerId);
  }

  copyPlayers() {
    let textPLayers = "";
    let count = 0;
    for (let player of this.players) {
      count++;
      textPLayers += `${count}. ${player.name}\r\n`;
    }
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = textPLayers;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }

  deleteAllPlayers() {
    for (let player of this.players) {
      this.removePlayer(player.id);
    }
  }
}
