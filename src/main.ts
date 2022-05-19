import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Banda } from './app/Bandas/banda';
import { bandas } from './app/Bandas/data';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"

function renderBandasInTable(courses: Banda[]): void {
  console.log('Desplegando bandas');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.id}</td>


    <td class="col"><a href=${course.name}> <pre class="cal"> ${course.numberOfMembers}</pre> </a></td>



                           <td> ${course.id} </td>
                           <td>${course.name}</td>
                           <td>${course.numberOfMembers}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

