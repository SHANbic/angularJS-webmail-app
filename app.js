angular
  .module("Webmail", [
    "ngSanitize",
    "ui.tinymce",
    "MailServiceMock",
    "MesFiltres",
    "MesDirectives"
  ])
  .controller("WebmailCtrl", function($scope, $location, mailService) {
    $scope.dossierCourant = null;
    $scope.emailCourant = null;
    $scope.afficherNouveauMail = false;
    $scope.vueCourante = null;

    $scope.selectDossier = function(valDossier) {
      $scope.vueCourante = "vueDossier";
      $scope.dossierCourant = mailService.getDossier(valDossier);
    };

    $scope.selectEmail = function(valDossier, idEmail) {
      $scope.vueCourante = "vueContenuMail";
      $scope.emailCourant = mailService.getMail(valDossier, idEmail);
    };

    $scope.versEmail = function(dossier, email) {
      $location.path(`/${dossier.value}/${email.id}`);
    };

    $scope.envoiMail = function(nouveauMail) {
      mailService.envoiMail(nouveauMail);
      $location.path("/");
    };

    $scope.$watch(
      function() {
        return $location.path();
      },
      function(newPath) {
        const tabPath = newPath.split("/");
        if (tabPath.length > 1 && tabPath[1]) {
          if (tabPath[1] == "nouveauMail") {
            $scope.vueCourante = "vueNouveauMail";
            $scope.$broadcast("initFormNouveauMail");
          } else {
            const valDossier = tabPath[1];
            $scope.selectDossier(valDossier);
            if (tabPath.length > 2) {
              const idEmail = tabPath[2];
              $scope.selectEmail(valDossier, idEmail);
            } else {
              $scope.selectDossier(valDossier);
            }
          }
        } else {
          $scope.vueCourante = null;
        }
      }
    );
    $scope.champTri = null;
    $scope.triDescendant = false;

    $scope.triEmail = function(champ) {
      if ($scope.champTri === champ) {
        $scope.triDescendant = !$scope.triDescendant;
      } else {
        $scope.champTri = champ;
        $scope.triDescendant = false;
      }
    };

    $scope.cssChevronsTri = function(champ) {
      return {
        glyphicon: $scope.champTri == champ,
        "glyphicon-chevron-up":
          $scope.champTri == champ && !$scope.triDescendant,
        "glyphicon-chevron-down":
          $scope.champTri == champ && $scope.triDescendant
      };
    };

    $scope.recherche = null;

    $scope.razRecherche = function() {
      $scope.recherche = null;
    };

    $scope.dossiers = mailService.getDossiers();
  });
