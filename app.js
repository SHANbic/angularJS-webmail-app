angular
  .module("Webmail", ["ngSanitize"])
  .controller("WebmailCtrl", function($scope, $location) {
    $scope.dossiers = [
      {
        value: "RECEPTION",
        label: "Boite de réception",
        emails: [
          {
            id: 1,
            from: "Albator",
            to: "PierreL",
            subject: "Je reviens",
            date: new Date(2018, 8, 29),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 2,
            from: "Capitaine Flam",
            to: "PierreL",
            subject: "Bisous de l'espace",
            date: new Date(2019, 6, 5),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 3,
            from: "Pikachu",
            to: "PierreL",
            subject: "Pika pika !",
            date: new Date(2019, 0, 24),
            content:
              "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika."
          },
          {
            id: 4,
            from: "Barbapapa",
            to: "PierreL",
            subject: "Hulahup Barbatruc",
            date: new Date(2019, 3, 19),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      },
      {
        value: "ARCHIVES",
        label: "Archives",
        emails: [
          {
            id: 5,
            from: "Candy",
            to: "PierreL",
            subject: "Bon anniversaire",
            date: new Date(2019, 11, 18),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 6,
            from: "Hiro Nakamura",
            to: "PierreL",
            subject: "Konichiwa",
            date: new Date(2019, 9, 12),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 7,
            from: "Asuka Langley Soryu",
            to: "PierreL",
            subject: "Ca va chier",
            date: new Date(2019, 11, 13),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          }
        ]
      },
      {
        value: "ENVOYES",
        label: "Envoyés",
        emails: [
          {
            id: 8,
            from: "PierreL",
            to: "Albator",
            subject: "Bien la famille ?",
            date: new Date(2019, 5, 25),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 9,
            from: "PierreL",
            to: "Capitaine Flam",
            subject: "Gloubiboulga Night",
            date: new Date(2019, 9, 29),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      },
      {
        value: "SPAM",
        label: "Courrier indésirable",
        emails: [
          {
            id: 10,
            from: "Rue du discount",
            to: "PierreL",
            subject: "Envie d'un nouveau frigo ?",
            date: new Date(2019, 2, 24),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 11,
            from: "Sofinnoga",
            to: "PierreL",
            subject: "Besoin d'argent ?",
            date: new Date(1970, 0, 2),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      }
    ];
    $scope.dossierCourant = null;
    $scope.emailCourant = null;

    $scope.selectDossier = function(dossier) {
      $scope.dossierCourant = dossier;
      $scope.emailCourant = null;
    };

    $scope.selectEmail = function(email) {
      $scope.emailCourant = email;
    };

    $scope.versEmail = function(dossier, email) {
      $location.path(`/${dossier.value}/${email.id}`);
    };

    $scope.$watch(
      function() {
        return $location.path();
      },
      function(newPath) {
        const tabPath = newPath.split("/");
        if (tabPath.length > 1) {
          const valDossier = tabPath[1];
          $scope.dossiers.forEach(item => {
            if (item.value == valDossier) {
              $scope.selectDossier(item);
            }
          });
          if (tabPath.length > 2) {
            const idMail = tabPath[2];
            $scope.dossierCourant.emails.forEach(item => {
              if (item.id == idMail) {
                $scope.selectEmail(item);
              }
            });
          }
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
