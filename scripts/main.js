import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
const coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
function renderBandasInTable(courses) {
    courses.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.numberOfMembers}</td>`;
        coursesTbody.appendChild(trElement);
    });
}
//# sourceMappingURL=main.js.map