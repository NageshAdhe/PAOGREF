export function Replace(el) {
  var /** @type {?} */ nativeElement = el.nativeElement;
  var /** @type {?} */ parentElement = nativeElement.parentElement;
  // move all children out of the element
  while (nativeElement.firstChild) {
    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
  }
  // remove the empty element(the host)
  parentElement.removeChild(nativeElement);
}

export function RemoveClasses(NewClassNames) {
  var /** @type {?} */ MatchClasses = NewClassNames.map(function(Class) {
      return document.querySelector("body").classList.contains(Class);
    });
  return MatchClasses.indexOf(true) !== -1;
}

export function ToggleClasses(Toggle, ClassNames) {
  var /** @type {?} */ Level = ClassNames.indexOf(Toggle);
  var /** @type {?} */ NewClassNames = ClassNames.slice(0, Level + 1);
  if (RemoveClasses(NewClassNames)) {
    NewClassNames.map(function(Class) {
      return document.querySelector("body").classList.remove(Class);
    });
  } else {
    document.querySelector("body").classList.add(Toggle);
  }
}
