angular
  .module("MesDirectives", [])
  .directive("contenuMail", function() {
    return {
      restrict: "E",
      template: `
        <div class="spacer">
            <div class="well">
                <h1>{{ email.subject }}</h1>
                <p><label>De:</label><span> {{ email.from }}</span></p>
                <p><label>&Agrave;:</label><span> {{ email.to }}</span>
                <p><label>Date:</label><span> {{ email.date | date: "dd/MM/yyyy" }}</span></p>
            </div>
            <p ng-bind-html="email.content"></p>
        </div>`,
      scope: {
        email: "="
      }
    };
  })
  .directive("nouveauMail", function() {
    return {
      restrict: "E",
      template: `
        <div class="spacer" ng-show="nouveauMail != null">
            <form name="formNouveauMail" id="formNouveauMail">
                
                <div class="input-group spacer">
                    <span class="input-group-addon labelChampNouveauMail">&Agrave;</span>
                    <input type="text" class="form-control" ng-model="nouveauMail.to" />
                </div>
            
                <div class="input-group spacer">
                    <span class="input-group-addon labelChampNouveauMail">Objet</span>
                    <input type="text" class="form-control" ng-model="nouveauMail.subject"/>
                </div>
            
                <div class="spacer">
                    <textarea ui-tinymce="optionsTinyMce" class="contenuNouveauMail" rows="10" ng-model="nouveauMail.content"></textarea>
                </div>

                <div class="spacer text-center">
                    <button class="btn btn-success" ng-click="clicEnvoiMail()">Envoyer le mail</button>
                    <span class="hspacer"></span>
                    <button class="btn btn-warning" ng-disabled="formNouveauMail.$pristine" ng-click="razMail()">
                        Remettre à zéro
                    </button>
                </div>
            </form>
        </div>`,
      scope: {
        envoiMail: "&"
      },
      controller: function($scope) {
        $scope.optionsTinyMce = {
          language: "fr_FR",
          menubar: false,
          statusbar: false
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

        $scope.clicEnvoiMail = function() {
          const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (
            !$scope.nouveauMail.to ||
            !$scope.nouveauMail.to.match(mailRegex)
          ) {
            window.alert("Erreur\n\nVérifiez votre saisie");
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
          $scope.envoiMail({ nouveauMail: $scope.nouveauMail });
        };
        $scope.$on("initFormNouveauMail", function() {
          $scope.razMail();
        });
      }
    };
  });
