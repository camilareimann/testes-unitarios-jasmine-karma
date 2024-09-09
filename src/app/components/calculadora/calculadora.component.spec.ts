import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../../services/calculadora.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let service: CalculadoraService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent],
      providers: [CalculadoraService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CalculadoraService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois numeros corretamente', () => {
    component.num1 = 1;
    component.num2 = 2;
    component.calculate();
    expect(component.result).toEqual(3);
  });

  it('deve subtrair dois numeros corretamente', () => {
    component.num1 = 5;
    component.num2 = 2;
    component.subtrairValor();
    expect(component.result).toEqual(3);
  });

  it('deve multiplicar dois numeros corretamente', () => {
    component.num1 = 3;
    component.num2 = 4;
    component.multiplicarValor();
    expect(component.result).toEqual(12);
  });

  it('deve dividir dois numeros corretamente', () => {
    component.num1 = 8;
    component.num2 = 2;
    component.dividirValor();
    expect(component.result).toEqual(4);
  });

  it('deve lançar erro ao dividir por zero', () => {
    component.num1 = 10;
    component.num2 = 0;
    expect(() => component.dividirValor()).toThrow(new Error('Divisão por zero'));
  });
});