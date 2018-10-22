import { Injectable } from '@angular/core';

@Injectable()
export class ServersService {

  constructor() { }
  private servers = [
    {
      id: 1,
      name: 'ServerTest1',
      status:'ACTIVE'
    },
    {
      id: 2,
      name: 'ServerTest2',
      status:'DESACTIVE'
    },
    {
      id: 3 ,
      name: 'ServerTest3',
      status:'ACTIVE'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id:number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id:number,serverInfo:{name:string, status:string}) {
  const server = this.servers.find(
    (s) => {
      return s.id === id;
    }
    );
    if(server){
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
