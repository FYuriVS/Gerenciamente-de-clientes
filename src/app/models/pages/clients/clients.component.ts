import { Component, OnInit } from '@angular/core';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients!: any;

  constructor(private clintService: ClientsService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.clintService.getAllClients().subscribe({
      next: (res) => {
        console.log(res);
        this.clients = res.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  redirectToMaps(endereco: string) {
    const formattedAddress = encodeURIComponent(endereco);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(googleMapsUrl, '_blank');
  }
}
