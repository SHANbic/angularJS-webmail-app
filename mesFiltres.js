angular.module("MesFiltres", []).filter("surbrillance", function() {
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