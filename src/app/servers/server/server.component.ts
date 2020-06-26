import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const serverId = + this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(serverId);
    this.route.paramMap.subscribe(
      (param: ParamMap) => {
        this.server = this.serversService.getServer(+param.get('id'));
      }
    );
  }

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
