import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.page').then(
        (m) => m.ResetPasswordPage
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'details-tontine',
    loadComponent: () =>
      import('./pages/details-tontine/details-tontine.page').then(
        (m) => m.DetailsTontinePage
      ),
  },
  {
    path: 'members',
    loadComponent: () =>
      import('./pages/members/members.page').then((m) => m.MembersPage),
  },
  {
    path: 'member-profile',
    loadComponent: () =>
      import('./pages/member-profile/member-profile.page').then(
        (m) => m.MemberProfilePage
      ),
  },
  {
    path: 'transaction-history',
    loadComponent: () =>
      import('./pages/transaction-history/transaction-history.page').then(
        (m) => m.TransactionHistoryPage
      ),
  },
  {
    path: 'pret',
    loadComponent: () =>
      import('./pages/pret/pret.page').then((m) => m.PretPage),
  },
  {
    path: 'epargne',
    loadComponent: () =>
      import('./pages/epargne/epargne.page').then((m) => m.EpargnePage),
  },
  {
    path: 'tontine',
    loadComponent: () =>
      import('./pages/tontine/tontine.page').then((m) => m.TontinePage),
  },
  {
    path: 'pret-rapide',
    loadComponent: () =>
      import('./pages/pret-rapide/pret-rapide.page').then((m) => m.PretRapidePage),
  },
  {
    path: 'credit-solidaire',
    loadComponent: () =>
      import('./pages/credit-solidaire/credit-solidaire.page').then(
        (m) => m.CreditSolidairePage
      ),
  },
  {
    path: 'pret-voiture',
    loadComponent: () =>
      import('./pages/pret-voiture/pret-voiture.page').then(
        (m) => m.PretVoiturePage
      ),
  },
  {
    path: 'pret-immobilier',
    loadComponent: () =>
      import('./pages/pret-immobilier/pret-immobilier.page').then(
        (m) => m.PretImmobilierPage
      ),
  },
  {
    path: 'contacter-conseiller',
    loadComponent: () =>
      import('./pages/contacter-conseiller/contacter-conseiller.page').then(
        (m) => m.ContacterConseillerPage
      ),
  },
  {
    path: 'epargne-classique',
    loadComponent: () =>
      import('./epargne/epargne-classique/epargne-classique.page').then(
        (m) => m.EpargneClassiquePage
      ),
  },
  {
    path: 'epargne-objectifs',
    loadComponent: () =>
      import('./epargne/epargne-objectifs/epargne-objectifs.page').then(
        (m) => m.EpargneObjectifsPage
      ),
  },
  {
    path: 'epargne-retraite',
    loadComponent: () =>
      import('./epargne/epargne-retraite/epargne-retraite.page').then(
        (m) => m.EpargneRetraitePage
      ),
  },
  {
    path: 'epargne-education',
    loadComponent: () =>
      import('./epargne/epargne-education/epargne-education.page').then(
        (m) => m.EpargneEducationPage
      ),
  },
  {
    path: 'ouvrir-compte-epargne',
    loadComponent: () =>
      import('./epargne/ouvrir-compte-epargne/ouvrir-compte-epargne.page').then(
        (m) => m.OuvrirCompteEpargnePage
      ),
  },
  {
    path: 'souscription-education',
    loadComponent: () =>
      import('./epargne/souscription-education/souscription-education.page').then(
        (m) => m.SouscriptionEducationPage
      ),
  },
  {
    path: 'tontine-hebdomadaire',
    loadComponent: () =>
      import('./pages/tontine-hebdomadaire/tontine-hebdomadaire.page').then(
        (m) => m.TontineHebdomadairePage
      ),
  },
  {
    path: 'tontine-femme',
    loadComponent: () =>
      import('./pages/tontine-femme/tontine-femme.page').then(
        (m) => m.TontineFemmePage
      ),
  },
  {
    path: 'tontine-professionnelle',
    loadComponent: () =>
      import('./pages/tontine-professionnelle/tontine-professionnelle.page').then(
        (m) => m.TontineProfessionnellePage
      ),
  },
  {
    path: 'tontine-voyage',
    loadComponent: () =>
      import('./pages/tontine-voyage/tontine-voyage.page').then(
        (m) => m.TontineVoyagePage
      ),
  },
  {
    path: 'offre-lancement',
    loadComponent: () =>
      import('./pages/offre-lancement/offre-lancement.page').then(
        (m) => m.OffreLancementPage
      ),
  },
  {
    path: 'historique-page',
    loadComponent: () =>
      import('./pages/historique-page/historique-page.page').then(
        (m) => m.HistoriquePagePage
      ),
  },
  {
    path: 'historique-tontines',
    loadComponent: () => import('./pages/historique-tontines/historique-tontines.page').then( m => m.HistoriqueTontinesPage)
  },
  {
  path: 'historique-tontines',
  loadComponent: () =>
    import('./pages/historique-tontines/historique-tontines.page').then(m => m.HistoriqueTontinesPage)
}
];
