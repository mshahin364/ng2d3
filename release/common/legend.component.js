"use strict";
var core_1 = require('@angular/core');
var trim_label_helper_1 = require('./trim-label.helper');
var Legend = (function () {
    function Legend() {
    }
    Legend.prototype.ngOnInit = function () {
        this.update();
    };
    Legend.prototype.ngOnChanges = function () {
        this.update();
    };
    Legend.prototype.update = function () {
        this.legendItems = this.getLegendItems();
    };
    Legend.prototype.getLegendItems = function () {
        var _this = this;
        return this.data.map(function (label, index) {
            return {
                className: 'legend-label',
                label: label,
                trimmedLabel: trim_label_helper_1.trimLabel(label) || '(empty)',
                backgroundColor: _this.colors(label)
            };
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Legend.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Legend.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Legend.prototype, "colors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Legend.prototype, "height", void 0);
    Legend = __decorate([
        core_1.Component({
            selector: 'legend',
            template: "\n    <div >\n      <header class=\"legend-title\"\n        style=\"white-space: nowrap; overflow: hidden;\">\n        <span class=\"legend-icon incon-eye-1\"></span>\n        <span class=\"legend-title-text\">{{title}}</span>\n      </header>\n\n      <div class=\"legend-wrap\">\n        <ul class=\"legend-labels\" style=\"white-space: nowrap;\">\n          <li *ngFor=\"let legendItem of legendItems\" [class]=\"legendItem.className\">\n            <span\n              [title]=\"legendItem.label\"\n              class=\"legend-label-color\"\n              [style.background-color]=\"colors(legendItem.label)\">\n            </span>\n\n            <span [title]=\"legendItem.label\" class=\"legend-label-text\">\n              {{legendItem.trimmedLabel}}\n            </span>\n\n          </li>\n        </ul>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Legend);
    return Legend;
}());
exports.Legend = Legend;
//# sourceMappingURL=legend.component.js.map