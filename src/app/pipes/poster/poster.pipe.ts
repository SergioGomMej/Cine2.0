import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(url: string | null): string {
    if(url == null){
      return 'https://th.bing.com/th/id/R.12c9761e41c6165c01d1058af4bc67e4?rik=u40K7AetT9HHVg&riu=http%3a%2f%2fwww.exactusjueceo.com%2fimages%2ferror.png&ehk=coA9sSjZoIton00ss%2fn03OEO2nxoZL99tmtDxd78jow%3d&risl=&pid=ImgRaw&r=0';
    }else{
      return url;
    }
  }

}
