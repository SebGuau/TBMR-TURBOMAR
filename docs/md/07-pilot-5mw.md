# Piloto 5 MW — Fase 0 de Validación

---

## 1. Objetivo del Piloto

La Fase 0 tiene como objetivo **demostrar la viabilidad física y operativa** del sistema a escala reducida (5 MW), antes de comprometer el capital necesario para la planta comercial de 26 MW.

### 1.1 Preguntas a Responder

1. ¿El sistema mantiene diferencial de presión estable a lo largo del tiempo?
2. ¿La hermeticidad de la cámara es mantenible bajo condiciones marinas reales?
3. ¿El OPEX real coincide con las estimaciones teóricas?
4. ¿Cuál es la disponibilidad real del sistema?
5. ¿Existen problemas de corrosión o bioincrostación no previstos?

---

## 2. Especificaciones del Piloto 5 MW

### 2.1 Dimensionamiento

| Parámetro | Piloto 5 MW | Planta 26 MW | Factor escala |
|---|---|---|---|
| Potencia neta | 5 MW | 26 MW | 1:5.2 |
| Diámetro tubería | 0.9 m | 2.0 m | 1:2.2 |
| Caudal | 1.6 m³/s | 7.85 m³/s | 1:4.9 |
| Profundidad | 500 m | 500 m | 1:1 |
| Longitud tubería | 500 m | 500 m | 1:1 |
| Cámara presión | 1.5m × 5m | 3m × 10m | 1:8 vol. |
| Turbina | 6 MW Pelton | 32 MW Pelton | 1:5.3 |
| Bomba vacío | 300 kW | 1.5-2 MW | 1:5 |

### 2.2 Ajustes de Diseño para Piloto

El piloto no es un simple "escalado lineal". Se aplican ajustes:

- **Tubería 0.9m en lugar de 0.4m:** Para mantener Reynolds turbulento similar
- **Misma profundidad 500m:** Para replicar condiciones de presión exactas
- **Válvulas sobredimensionadas:** Para mayor flexibilidad operativa
- **Instrumentación adicional:** 3× más sensores que planta comercial

---

## 3. Presupuesto Piloto Detallado

### 3.1 CAPEX Piloto

| Componente | Coste (M€) |
|---|---|
| Tubería 0.9m × 550m (instalación incluida) | 1.5-2.0 |
| Cámara de presión diferencial (pequeña) | 0.8-1.2 |
| Turbina Pelton 6 MW | 2.5-3.5 |
| Bomba de vacío 300 kW | 0.3-0.5 |
| Sistema de sifón | 0.3-0.4 |
| Generador 6 MW | 1.0-1.5 |
| Cable submarino 5 km | 0.5-0.8 |
| Sistema control e instrumentación (x3 sensores) | 0.5-0.8 |
| Barco instalación y logística | 0.8-1.2 |
| Ingeniería y dirección de obra | 0.5-0.8 |
| Contingencia 25% | 0.7-1.0 |
| **TOTAL CAPEX PILOTO** | **€9.2 M** |

### 3.2 OPEX Piloto (por 18 meses de datos)

| Partida | Coste (M€) |
|---|---|
| Personal (3 técnicos + 1 gestor) | 0.4 |
| Mantenimiento y reparaciones | 0.3 |
| Inspecciones ROV (4 en 18 meses) | 0.2 |
| Energía bomba vacío | 0.2 |
| Análisis de datos e informes | 0.2 |
| **TOTAL OPEX 18 MESES** | **1.3 M€** |

### 3.3 PRESUPUESTO TOTAL FASE 0

```
CAPEX: €9.5-13.7M
OPEX 18 meses: €1.3M
Estudios previos y permisos: €0.5-1.0M

TOTAL FASE 0: €11.3-16.0M
```

> **NOTA:** El presupuesto realista, incluyendo instalación submarina y contingencias del 20%, es €9.2M (Fase 0 validación). No incluye los €89M de la Fase 1 (planta completa).

---

## 4. Cronograma Piloto

```
MES 1-3:   Ingeniería de detalle + permisos iniciales
MES 4-6:   Fabricación componentes (turbina, cámara)
MES 7-9:   Fabricación tubería + preparación logística
MES 10-12: Instalación submarina (barco especializado)
MES 13:    Comisionado y arranque del sistema
MES 14-30: Operación y recogida de datos (18 meses)
MES 31:    Análisis de resultados e informe final
MES 32:    Decisión GO/NO-GO para Fase 1
```

**Duración total Fase 0: 32 meses (~2.7 años)**

---

## 5. Plan de Medición y Datos

### 5.1 Parámetros a Medir (Continuo, cada 1 minuto)

| Sensor | Ubicación | Parámetro |
|---|---|---|
| PT-001 a PT-005 | Tubería (0,125,250,375,500m) | Presión |
| FT-001 | Entrada cámara | Caudal másico |
| TT-001 a TT-003 | Tubería (0,250,500m) | Temperatura |
| PT-010 | Cámara presión | Presión cámara |
| PT-011 | Salida sifón | Presión salida |
| VT-001 | Turbina | Velocidad rotación |
| WT-001 | Generador | Potencia generada |
| CT-001 | Cámara | Inspección visual (cámara) |
| UT-001 a UT-003 | Tubería exterior | Corrosión ultrasónica |

### 5.2 Datos Esperados al Final del Piloto

- **220,000 minutos de datos** (18 meses continuo)
- **Disponibilidad real:** Objetivo >90% (incluyendo arranques)
- **Curva de aprendizaje:** OPEX real vs estimado
- **Degración:** Pérdida de eficiencia en el tiempo
- **Incidencias:** Log de fallos y tiempos de reparación

---

## 6. Criterios Go/No-Go

### 6.1 Criterios GO (continuar a Fase 1)

Todos los siguientes deben cumplirse:

- [ ] Disponibilidad ≥ 85% durante últimos 6 meses
- [ ] Potencia media ≥ 4 MW (80% del nominal)
- [ ] OPEX real ≤ 130% del estimado
- [ ] Sin fallos estructurales críticos (tubería, cámara)
- [ ] Sin problemas de corrosión acelerada no prevista
- [ ] Diferencial de presión estable ≥ 45 atm durante operación

### 6.2 Criterios NO-GO (cancelar o rediseñar)

Cualquiera de los siguientes:

- [ ] Disponibilidad < 70% de forma persistente
- [ ] Colapso o fuga en cámara de presión
- [ ] OPEX real > 200% del estimado
- [ ] Problema de corrosión severo no soluble
- [ ] Problema ambiental no previsto (impacto fauna)

### 6.3 Criterio REDISEÑO (ajustar antes de Fase 1)

- Disponibilidad 70-85% (mejorable con ajustes)
- OPEX 130-200% (identificar causas y optimizar)
- Problemas técnicos menores resolubles con rediseño

---

## 7. Equipo y Organización

### 7.1 Equipo Técnico Fase 0

| Rol | Perfil | FTE |
|---|---|---|
| Director de Proyecto | Ingeniero senior renovables marinas | 1.0 |
| Ingeniero Mecánico | Especialista turbomáquinas submarinas | 1.0 |
| Ingeniero Eléctrico | Especialista sistemas generación | 1.0 |
| Técnico de Operación | Operador planta (turno día) | 1.0 |
| Especialista ROV | Inspección submarina | 0.5 |
| Asesor Legal/Regulatorio | Permisos marinos | 0.3 |

### 7.2 Soporte Externo

- **Empresa instalación submarina:** Contratada para instalación
- **Laboratorio análisis:** Universidad de Huelva (colaboración)
- **Clase certificadora:** Bureau Veritas o DNV (seguridad)

---

## 8. Financiación Fase 0

### 8.1 Fuentes Propuestas

| Fuente | Importe | Probabilidad |
|---|---|---|
| Horizonte Europa (R&D) | €3-5M | Media |
| CDTI (España) | €2-3M | Alta |
| Junta de Andalucía | €1-2M | Alta |
| Capital riesgo (CleanTech) | €5-8M | Media |
| **TOTAL** | **€11-18M** | |

### 8.2 Atractivo para Inversores CleanTech

- Fase 0 no requiere demostrar viabilidad comercial
- Riesgo acotado: pérdida máxima = inversión piloto
- Potencial: Si funciona, Fase 1 es inversión de €30M con TIR 24%
- Patentes: Propiedad intelectual generada en Fase 0

---

## 9. Riesgos Específicos del Piloto

| Riesgo | Prob. | Impacto | Mitigación |
|---|---|---|---|
| Retraso permisos submarinos | Alta | Medio | Inicio temprano tramitación |
| Fuga en cámara de presión | Media | Alto | Diseño conservador, pruebas en tierra |
| Daño por temporales marinos | Media | Alto | Seguro, diseño para oleaje 100 años |
| Bioincrustación acelerada | Baja | Medio | Revestimiento antifouling |
| Interferencia con pesca local | Media | Medio | Coordinación previa pescadores |
| Fallo turbina en primeros meses | Baja | Alto | Garantía proveedor 2 años, repuesto |

---

## 10. Valor de la Fase 0

Independientemente del resultado:

**Si es GO:**
- Tenemos datos reales para levantar €30M para Fase 1
- LCOE real confirmado → negociación PPA más fácil
- Patentes validadas con demostración técnica

**Si es NO-GO:**
- Evitamos invertir €60M en algo que no funciona
- Aprendemos por qué no funciona (valor técnico)
- Posiblemente redirigimos a otro diseño con los datos

**En cualquier caso: la Fase 0 es la inversión más inteligente.**
