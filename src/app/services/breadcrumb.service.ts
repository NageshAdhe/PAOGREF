import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs/index";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
@Injectable({
  providedIn: "root"
})
export class BreadcrumbService {
  breadcrumbs: Observable<Array<Object>>;
  private _breadcrumbs;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router = router;
    this.route = route;
    this._breadcrumbs = new BehaviorSubject(new Array());
    this.breadcrumbs = this._breadcrumbs.asObservable();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const /** @type {?} */ breadcrumbs = [];
        let /** @type {?} */ currentRoute = this.route.root /** @type {?} */,
          url = "";
        do {
          const /** @type {?} */ childrenRoutes = currentRoute.children;
          currentRoute = null;
          // tslint:disable-next-line:no-shadowed-variable
          childrenRoutes.forEach(route => {
            if (route.outlet === "primary") {
              const /** @type {?} */ routeSnapshot = route.snapshot;
              url +=
                "/" + routeSnapshot.url.map(segment => segment.path).join("/");
              breadcrumbs.push({
                label: route.snapshot.data,
                url: url
              });
              currentRoute = route;
            }
          });
        } while (currentRoute);
        this._breadcrumbs.next(Object.assign([], breadcrumbs));
        return breadcrumbs;
      });
  }
}
