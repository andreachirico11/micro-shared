import { json, urlencoded, Application, Router } from 'express';

export function configApp (app: Application, baseUrl: string, router: Router) {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use('/' + baseUrl, router);
  return app;
}
