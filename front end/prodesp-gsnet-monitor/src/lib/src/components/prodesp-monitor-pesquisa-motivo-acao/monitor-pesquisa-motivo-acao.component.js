"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var tipoacaomotivo_1 = require("./../../models/tipoacaomotivo");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var core_1 = require("@angular/core");
var modal_component_model_1 = require("../../models/modal.component.model");
var ProdespMonitorPesquisaMotivoAcaoComponent = (function (_super) {
    __extends(ProdespMonitorPesquisaMotivoAcaoComponent, _super);
    function ProdespMonitorPesquisaMotivoAcaoComponent(dialogService) {
        var _this = _super.call(this, dialogService) || this;
        _this.Tipos = [];
        return _this;
    }
    ProdespMonitorPesquisaMotivoAcaoComponent.prototype.ngOnInit = function () {
        this.carregarComboMotivoAcao();
    };
    ProdespMonitorPesquisaMotivoAcaoComponent.prototype.carregarComboMotivoAcao = function () {
        this.Tipos = [
            new tipoacaomotivo_1.TipoAcaoMotivo(-1, 'Todos'),
            new tipoacaomotivo_1.TipoAcaoMotivo(0, 'Ação'),
            new tipoacaomotivo_1.TipoAcaoMotivo(1, 'Motivo'),
        ];
    };
    return ProdespMonitorPesquisaMotivoAcaoComponent;
}(modal_component_model_1.ModalComponent));
ProdespMonitorPesquisaMotivoAcaoComponent = __decorate([
    core_1.Component({
        selector: 'app-prodesp-monitor-pesquisa-motivo-acao',
        templateUrl: './prodesp-monitor-pesquisa-motivo-acao.component.html',
        styleUrls: ['./prodesp-monitor-pesquisa-motivo-acao.component.css']
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
], ProdespMonitorPesquisaMotivoAcaoComponent);
exports.ProdespMonitorPesquisaMotivoAcaoComponent = ProdespMonitorPesquisaMotivoAcaoComponent;
//# sourceMappingURL=monitor-pesquisa-motivo-acao.component.js.map