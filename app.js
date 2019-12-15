angular
  .module("Webmail", ["ngSanitize", "ui.tinymce", "MailServiceMock"])
  .controller("WebmailCtrl", function($scope, $location, $filter, mailService) {
    $scope.idProchainMail = 12;
    $scope.dossierCourant = null;
    $scope.emailCourant = null;
    $scope.nouveauMail = null;

    $scope.selectDossier = function(valDossier) {
      $scope.dossierCourant = mailService.getDossier(valDossier);
      $scope.emailCourant = null;
      if (valDossier) {
        $scope.nouveauMail = null;
      }
    };

    $scope.selectEmail = function(valDossier, idEmail) {
      $scope.emailCourant = mailService.getMail(valDossier, idEmail);
    };

    $scope.versEmail = function(dossier, email) {
      $location.path(`/${dossier.value}/${email.id}`);
    };

    $scope.razMail = function() {
      $scope.nouveauMail = {
        from: "PierreL",
        date: new Date()
      };
      if (tinyMCE.activeEditor) {
        tinyMCE.activeEditor.setContent("");
      }
      $scope.formNouveauMail.$setPristine();
    };

    $scope.envoiMail = function() {
      const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!$scope.nouveauMail.to || !$scope.nouveauMail.to.match(mailRegex)) {
        alert("Erreur \n\n Vérifiez votre saisie");
        return;
      }
      if (!$scope.nouveauMail.subject) {
        if (
          !confirm(
            "Confirmation\n\nEtes vous certain de vouloir envoyer votre mail sans objet?"
          )
        ) {
          return;
        }
      }
      mailService.envoiMail($scope.nouveauMail);
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
            $scope.razMail();
            $scope.selectDossier(null);
          } else {
            const valDossier = tabPath[1];
            $scope.selectDossier(valDossier);
            if (tabPath.length > 2) {
              const idEmail = tabPath[2];
              $scope.selectEmail(valDossier, idEmail);
            }
          }
        } else {
          $scope.selectDossier(null);
          $scope.nouveauMail = null;
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

    $scope.optionsTinyMce = {
      language: "fr_FR",
      menubar: false,
      statusbar: false
    };

    $scope.dossiers = mailService.getDossiers();
  })
  .filter("surbrillance", function() {
    return function(input, recherche) {
      if (recherche) {
        return input.replace(
          new RegExp("(" + recherche + ")", "gi"),
          "<span class='surbrillance'>$1</span>"
        );
      }
      return input;
    };
  });
