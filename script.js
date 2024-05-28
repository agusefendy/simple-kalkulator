const _0x32a036 = _0x4be4;
(function (_0x1581c3, _0x436772) {
  const _0x2c030a = _0x4be4,
    _0x58bb6d = _0x1581c3();
  while (!![]) {
    try {
      const _0x3e12ef =
        parseInt(_0x2c030a(0x123)) / 0x1 +
        (parseInt(_0x2c030a(0x135)) / 0x2) *
          (parseInt(_0x2c030a(0x12a)) / 0x3) +
        parseInt(_0x2c030a(0x130)) / 0x4 +
        (-parseInt(_0x2c030a(0x12d)) / 0x5) *
          (-parseInt(_0x2c030a(0x12b)) / 0x6) +
        -parseInt(_0x2c030a(0x127)) / 0x7 +
        parseInt(_0x2c030a(0x120)) / 0x8 +
        (parseInt(_0x2c030a(0x12e)) / 0x9) *
          (-parseInt(_0x2c030a(0x124)) / 0xa);
      if (_0x3e12ef === _0x436772) break;
      else _0x58bb6d["push"](_0x58bb6d["shift"]());
    } catch (_0x720a63) {
      _0x58bb6d["push"](_0x58bb6d["shift"]());
    }
  }
})(_0x81ff, 0x4080a);
function appendNumber(_0x2180aa) {
  const _0x16be31 = _0x4be4;
  document[_0x16be31(0x129)](_0x16be31(0x134))[_0x16be31(0x133)] += _0x2180aa;
}
function _0x4be4(_0x119eef, _0x2a58c1) {
  const _0x81ffd7 = _0x81ff();
  return (
    (_0x4be4 = function (_0x4be431, _0x2026fb) {
      _0x4be431 = _0x4be431 - 0x11e;
      let _0x377191 = _0x81ffd7[_0x4be431];
      return _0x377191;
    }),
    _0x4be4(_0x119eef, _0x2a58c1)
  );
}
function calculate() {
  const _0x4ed726 = _0x4be4;
  let _0x2b27fb = document[_0x4ed726(0x129)](_0x4ed726(0x134)),
    _0x5f572b = _0x2b27fb[_0x4ed726(0x133)];
  function _0x4604ef(_0x86f024) {
    const _0x577b47 = _0x4ed726;
    try {
      let _0x36808a =
          _0x86f024["split"](/([+\-*/])/)[_0x577b47(0x12c)](Boolean),
        _0x575b13 = [],
        _0x2097e8 = { "*": 0x2, "/": 0x2, "+": 0x1, "-": 0x1 };
      function _0xf62d25(_0x4283bc, _0x4cd395, _0x556f8f) {
        switch (_0x4283bc) {
          case "+":
            return _0x556f8f + _0x4cd395;
          case "-":
            return _0x556f8f - _0x4cd395;
          case "*":
            return _0x556f8f * _0x4cd395;
          case "/":
            return _0x556f8f / _0x4cd395;
        }
      }
      for (
        let _0x1b6872 = 0x0;
        _0x1b6872 < _0x36808a[_0x577b47(0x136)];
        _0x1b6872++
      ) {
        let _0x2e4b6e = _0x36808a[_0x1b6872];
        if (!isNaN(parseFloat(_0x2e4b6e)))
          _0x575b13[_0x577b47(0x11f)](parseFloat(_0x2e4b6e));
        else {
          if (_0x2e4b6e in _0x2097e8) {
            while (
              _0x575b13[_0x577b47(0x136)] > 0x1 &&
              _0x2097e8[_0x575b13[_0x575b13[_0x577b47(0x136)] - 0x2]] >=
                _0x2097e8[_0x2e4b6e]
            ) {
              let _0x4d8ba1 = _0x575b13[_0x577b47(0x126)](),
                _0xa4c57e = _0x575b13[_0x577b47(0x126)](),
                _0x22c579 = _0x575b13[_0x577b47(0x126)]();
              _0x575b13[_0x577b47(0x11f)](
                _0xf62d25(_0x4d8ba1, _0xa4c57e, _0x22c579)
              );
            }
            _0x575b13["push"](_0x2e4b6e);
          }
        }
      }
      while (_0x575b13[_0x577b47(0x136)] > 0x1) {
        let _0x430d8d = _0x575b13["pop"](),
          _0x172e7e = _0x575b13["pop"](),
          _0x5db9e4 = _0x575b13[_0x577b47(0x126)]();
        _0x575b13[_0x577b47(0x11f)](_0xf62d25(_0x172e7e, _0x430d8d, _0x5db9e4));
      }
      return _0x575b13["pop"]();
    } catch (_0x49cd0c) {
      return console["error"](_0x577b47(0x132), _0x49cd0c), "Error";
    }
  }
  _0x2b27fb["value"] = _0x4604ef(_0x5f572b);
}
function clearDisplay() {
  const _0x5cc497 = _0x4be4;
  document["getElementById"](_0x5cc497(0x134))["value"] = "";
}
function _0x81ff() {
  const _0x4161cb = [
    "18RMbpcL",
    "filter",
    "413215AdugeG",
    "18kTpYHF",
    ".calculator\x20button",
    "305452XYFcZz",
    "textContent",
    "Error\x20in\x20evaluating\x20expression:\x20",
    "value",
    "display",
    "4WnaHDD",
    "length",
    "querySelectorAll",
    "push",
    "400824vFNJLH",
    "click",
    "DOMContentLoaded",
    "272627tbzLCH",
    "3418130uYGzxr",
    "addEventListener",
    "pop",
    "1030400CMBQWh",
    "forEach",
    "getElementById",
    "672009OPAuPG",
  ];
  _0x81ff = function () {
    return _0x4161cb;
  };
  return _0x81ff();
}
document[_0x32a036(0x125)](_0x32a036(0x122), function () {
  const _0x4d89ac = _0x32a036,
    _0x52ad34 = document[_0x4d89ac(0x11e)](_0x4d89ac(0x12f));
  _0x52ad34[_0x4d89ac(0x128)]((_0xa8fbef) => {
    const _0x29ec92 = _0x4d89ac;
    _0xa8fbef[_0x29ec92(0x125)](_0x29ec92(0x121), function () {
      const _0x5705f7 = _0x29ec92,
        _0x1296c5 = this[_0x5705f7(0x131)];
      if (_0x1296c5 === "C") clearDisplay();
      else _0x1296c5 === "=" ? calculate() : appendNumber(_0x1296c5);
    });
  });
});
