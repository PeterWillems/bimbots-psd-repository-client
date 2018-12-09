import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {PropertySetDefinitionComponent} from './property-set-definition/property-set-definition.component';
import {PropertyDefinitionComponent} from './property-definition/property-definition.component';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpClientModule} from '@angular/common/http';
import {ProductSelectionComponent} from './product-selection/product-selection.component';
import {InformationDeliverySpecificationComponent} from './information-delivery-specification/information-delivery-specification.component';

const appRoutes: Routes = [
  {path: 'information_delivery_specification', component: InformationDeliverySpecificationComponent},
  {path: 'products', component: ProductSelectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PropertySetDefinitionComponent,
    PropertyDefinitionComponent,
    ProductSelectionComponent,
    InformationDeliverySpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({uri: 'http://localhost:8080/graphql'}),
 //     link: httpLink.create({uri: 'https://gentle-lake-13895.herokuapp.com/graphql'}),
      cache: new InMemoryCache()
    });
  }
}