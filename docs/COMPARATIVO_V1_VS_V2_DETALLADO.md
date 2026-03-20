# COMPARATIVO COMPLETO v1.0 vs v2.0

**Documento:** Comparativo Técnico y Económico Detallado
**Fecha:** Marzo 2026
**Versiones:** v1.0 Arquitectura Submarina vs v2.0 Turbina en Superficie

---

## Tabla Síntesis

| Parámetro | v1.0 | v2.0 | Mejora | % |
|-----------|------|------|--------|---|
| CAPEX | €70-80M | €65-70M | -€5-10M | -10% |
| OPEX/año | €8-10M | €6.5-7.5M | -€1.5-2.5M | -20% |
| Potencia nominal | 26.5 MW | 26 MW (dual) | = | ≈0% |
| Potencia disponible | 26.5 MW | 35.8 MW | +9.3 MW | +35% |
| Disponibilidad | 95% | 96-97% | +1-2% | +1% |
| Payback | 5.1 años | 4.4 años | -0.7 años | -14% |
| ROI | 19.4% | 22.6% | +3.2% | +17% |
| LCOE (solo elec.) | €49/MWh | €43.6/MWh | -€5.4/MWh | -11% |
| LCOE (con agua) | €45/MWh | €37/MWh | -€8/MWh | -18% |
| Downtime reparación | 2-3 meses | 1 día | -55+ días | -98% |
| Riesgo estructura | CRÍTICO | BAJO | Eliminado | - |
| EIA aprobación | 40-60% | 80%+ | +20-40% | +50% |

---

## Desglose Detallado

### CAPEX (Capital Expenditure)

#### Tubería Ascendente
- Material: Acero, revestimiento epoxídico, ánodos sacrificio
- Longitud: 500m (IGUAL en v1.0 y v2.0)
- Diámetro: 2.0m interior
- Costo: €300-500/m × 500m = €150-250k
- **Diferencia v1.0 vs v2.0: ±0**

#### Cámara de Presión — El Cambio Clave
- **v1.0:** Submarina 500m, acero 316L, espesor 8cm, Volumen 70m³
  - Spec presión: 50 atm diferencial (49.3 atm neto)
  - Factor seguridad: 1.2:1 (MUY BAJO — riesgo implosión)
  - Costo: **€15-20M** (alto por alta presión y cobertura estructural)
  - Riesgo fatiga: 14,600 ciclos en 20 años exceden límite S-N

- **v2.0:** Superficie, acero 316L, espesor 3cm, Volumen 70m³
  - Spec presión: 0.3 atm diferencial
  - Factor seguridad: >3:1 (SEGURO — stress muy bajo)
  - Costo: **€2-3M** (-85% vs v1.0)
  - Riesgo fatiga: Mínimo, stress << límite S-N

#### Plataforma Flotante (solo v2.0)
- Tamaño: ~30m × 20m
- Material: Acero marino, sistemas de fondeo
- Costo: **€2-3M** (nuevo componente en v2.0)

#### Turbinas Pelton
- **v1.0:** 1× Pelton 26-32 MW
  - Costo: €3-5M
  - Downtime fallo: 2-3 meses (submarina)

- **v2.0:** 2× Pelton 13-16 MW (redundancia total)
  - Costo: €4-6M (+€1-2M por segunda turbina)
  - Downtime fallo: 1 día (superficie, acceso directo)
  - Operación con fallo: Continúa al 50% (NO parada total)

#### Desgasificador Integrado (solo v2.0)
- Separador gases pre-cámara (columna de desgasificación)
- Reduce carga bomba vacío: -1-1.5 MW de consumo
- Costo: **€0.5-1M** (nuevo componente)

#### Sistema Descarga Ambiental
- **v1.0:** Sifón a superficie (simple, barato)
  - Impacto ambiental: Choque térmico ±8°C, eutrofización
  - Probabilidad EIA: 40-60%

- **v2.0:** Tubería 50-100m profundidad + difusor multiperforado
  - Costo extra: **€0.3-0.5M**
  - Impacto ambiental: -95% choque térmico, -80% eutrofización
  - Probabilidad EIA: 80%+

#### CAPEX TOTAL

```
RUBROS PRINCIPALES (comparativa):
                              v1.0        v2.0        DELTA
──────────────────────────────────────────────────────────
Equipos específicos          €17-23M     €9-14M      -€8-9M
  (cámara, plataforma, turbinas, desgasificador, descarga)

Turbina+Generador            €15M        €15M        ±0
Bomba vacío                  €1M         €1M         ±0
Desalinización OI            €25M        €25M        ±0
Instalación submarina        €14M        €12-13M     -€1-2M
Instalación superficie       ±0          €5M         +€5M
Contingencias 10%            €7M         €6.5M       -€0.5M
──────────────────────────────────────────────────────────
TOTAL ESTIMADO               €79-85M     €68.5-74.5M -€10-16M

RACIONAL PROMEDIO:           €70M    →   €65M        -€5M (-7%)
```

---

### OPEX (Operational Expenditure)

#### Mantenimiento Tubería
- Anillos rasadores exterior: €280k/año
- Limpieza pig interior: €100k/año
- Ánodos sacrificio: €50k/año
- Inspección NDT: €40k/año
- **SUBTOTAL: €470k/año — IGUAL v1.0 y v2.0**

#### Mantenimiento Turbinas
- **v1.0 (submarina 500m):**
  - Inspección ROV: €300k/año
  - Mantenimiento in-situ (buzo + barco): €400k/año
  - Riesgo downtime reparación: €1-3M eventual
  - **SUBTOTAL: €700k/año base** + riesgo catastrófico

- **v2.0 (superficie):**
  - Inspección visual: €50k/año
  - Mantenimiento en taller/plataforma: €300k/año
  - Reemplazo álabes: €100k ocasional
  - **SUBTOTAL: €450k/año base** — sin riesgo catastrófico
  - **AHORRO: -€250k/año (-35%)**

#### Bomba de Vacío
- **v1.0:** 3-4 MW consumo continuo (sin desgasificador)
  - Costo electricidad: €1.7M/año (a €80/MWh × 3.5MW × 8760h)
  - Mantenimiento: €100k/año

- **v2.0:** 2-2.5 MW consumo continuo (con desgasificador)
  - Costo electricidad: €1.2M/año
  - Mantenimiento: €100k/año
  - **AHORRO: -€0.5M/año (-30%)**

#### Monitoreo Ambiental (solo v2.0)
- Boyas RTK + muestreo periódico
- Obligatorio para cumplimiento EIA
- **Costo: €200k/año (nuevo en v2.0)**

#### OPEX TOTAL

```
RUBROS:                       v1.0         v2.0         DELTA
──────────────────────────────────────────────────────────────
Personal (3 operadores)       €200k        €200k        ±0
Mantenimiento tubería         €470k        €470k        ±0
Mantenimiento turbinas        €700k        €450k        -€250k
Bomba vacío                   €1.7M        €1.2M        -€0.5M
Membranas OI                  €800k        €800k        ±0
Inspecciones NDT              €100k        €100k        ±0
Monitoreo ambiental           ±0           €200k        +€200k
Seguros/permisos              €600k        €600k        ±0
──────────────────────────────────────────────────────────────
TOTAL v1.0:                   €8.6-9.2M/año
TOTAL v2.0:                   €6.6-7.2M/año
AHORRO ANUAL:                 -€2.0-2.6M (-25%)
```

---

### POTENCIA Y ENERGÍA

#### Balance Potencia

```
Presión marina (500m):   50 atm
Fricción:               -0.17 atm
Presión cámara:         -0.7 atm
PRESIÓN NETA:           49.13 atm

Caudal: 7.85 m³/s

POTENCIA TEÓRICA BRUTA: 38.6 MW

Menos consumos:
  v1.0: Bomba vacío -3.5 MW, Generador -0.8 MW → NETA: 34.3 MW
  v2.0: Bomba vacío -2.0 MW, Generador -0.8 MW → NETA: 35.8 MW

GANANCIA v2.0: +1.5 MW (+4%)
```

#### Energía Anual

```
v1.0 (26.5 MW, 95% disponibilidad):
Energía = 26.5 × 8,760 × 0.95 = 219.8 GWh/año

v2.0 (26 MW dual, 97% disponibilidad):
Energía = 26 × 8,760 × 0.97 = 220.8 GWh/año
Margen disponible (35.8 MW - 26 MW): +9.8 MW (para expansión futura)

DIFERENCIA: +1 GWh/año (+0.5%)
```

---

### PAYBACK Y ROI

#### Ingresos (IGUALES en v1.0 y v2.0)

```
Electricidad: €17.6M/año (220 GWh × €80/MWh)
Agua (ponderado): €4M/año
TOTAL INGRESOS: €21.6M/año
```

#### Cálculo Payback

```
                          v1.0      v2.0      MEJORA
──────────────────────────────────────────────────
CAPEX                    €70M      €65M      -€5M
OPEX/año                 €8.0M     €6.9M     -€1.1M
Ingresos/año             €21.6M    €21.6M    ±0
Beneficio neto/año       €13.6M    €14.7M    +€1.1M
Payback (años)           5.1 años  4.4 años  -0.7 años (-14%)
ROI anual                19.4%     22.6%     +3.2% (+17%)
──────────────────────────────────────────────────
```

#### LCOE (Levelized Cost of Energy)

```
Formula simplificada (6% descuento, 25 años):

v1.0:
  CAPEX: €70M
  OPEX 25 años: €200M (€8M × 25)
  Energía 25 años: 5,495 GWh (220 × 25)
  LCOE = (€70M + €200M) / 5,495 GWh = €49/MWh

v2.0:
  CAPEX: €65M
  OPEX 25 años: €175M (€7M × 25)
  Energía 25 años: 5,520 GWh
  LCOE = (€65M + €175M) / 5,520 GWh = €43.5/MWh

MEJORA: -€5.5/MWh (-11%)
Con ingresos agua: €37/MWh efectivo (-€12/MWh, -24%)
```

---

### DISPONIBILIDAD Y CONFIABILIDAD

#### v1.0: Turbina Única Submarina

```
Downtime mantenimiento: 30 días/año = 8%
Riesgo fallo: 1 cada 5-8 años probable
Downtime reparación fallo: 2-3 meses = 17-25% ese año
DISPONIBILIDAD PROMEDIO: 90-94% (asumiendo fallo cada 6 años)

Caso pesimista (fallo + reparación 3 meses):
  Disponibilidad ese año: 75%
  Pérdida ingresos: -€5.4M ese año
```

#### v2.0: 2× Turbinas Redundantes en Superficie

```
Downtime mantenimiento: 15 días/año por turbina (rotativo) = 4%
Riesgo fallo: 1 turbina cada 8-10 años
Operación con 1 turbina: 13 MW CONTINUO (sin parada total)
DISPONIBILIDAD: 97-98%

Caso pesimista (falla turbina A):
  Turbina A: cerrada automáticamente
  Turbina B: continúa generando 13 MW
  Downtime total del sistema: 0 horas
  Capacidad reducida: -50% temporalmente
  Ingresos ese año: €10.8M (vs €21.6M normal)
  Pérdida REAL (promediada 20 años): -€0.54M/año

vs v1.0: pérdida esperada promediada 20 años: -€1.35M/año
MEJORA: -€0.81M/año menos riesgo ingresos
```

---

### RIESGO ESTRUCTURAL

#### Factor de Seguridad Cámara

```
v1.0 (Cámara submarina 500m):
  Presión externa: 50 atm
  Presión interna: 0.7 atm
  Diferencial: 49.3 atm
  Material: 316L (yield ~200 MPa)
  Factor seguridad calculado: 1.2:1 (MUY BAJO — normas exigen >3:1)
  Ciclos mareas 20 años: 14,600
  Límite S-N acero marino: ~100 MPa @ 10⁷ ciclos
  RIESGO: ALTO — posible fallo por fatiga (implosión catastrófica)

v2.0 (Cámara superficie):
  Presión externa: 1 atm
  Presión interna: 0.7 atm
  Diferencial: 0.3 atm
  Material: 316L (yield ~200 MPa)
  Factor seguridad calculado: >3:1 (CUMPLE NORMAS)
  Ciclos mareas: irrelevantes (stress << límite)
  RIESGO: BAJO — seguridad estructural garantizada indefinidamente
```

---

### PERMISO AMBIENTAL (EIA)

#### v1.0: Descarga Superficial

```
Problema: 7.85 m³/s agua profunda (10°C, O₂ supersaturado, nutrientes)
Impactos:
  - Choque térmico: ±8°C en zona 500m radio
  - Eutrofización: Bloom algal 3-6 meses
  - Hipoxia local: burbujas O₂

Probabilidad aprobación EIA: 40-60% (ALTA INCERTIDUMBRE)
Riesgo proyecto: CRÍTICO si rechaza (bloqueo total)
```

#### v2.0: Descarga a 50-100m

```
Solución: Tubería descarga a 50-100m + difusor multiperforado
Mitigación:
  - Dispersión en columna: -95% impacto térmico
  - Dilución nutrientes: -80% eutrofización
  - Monitoreo obligatorio: Boyas RTK (€200k/año incluido OPEX)

Probabilidad aprobación EIA: 80%+ (ACEPTABLE)
Riesgo proyecto: BAJO — precedentes positivos en OTEC y OI offshore
```

---

## Conclusión Ejecutiva

### v2.0 Mejora Sistemáticamente Todos los Indicadores Críticos

| Indicador | Mejora Absoluta | Mejora Relativa |
|-----------|----------------|-----------------|
| CAPEX | -€5-10M | -7 a -13% |
| OPEX/año | -€1.5-2.5M | -20 a -25% |
| Payback | -0.7 años | -14% |
| ROI | +3.2% | +17% |
| LCOE | -€5.5/MWh | -11% |
| Downtime reparación | -55+ días | -98% |
| Riesgo implosión | Eliminado | - |
| Probabilidad EIA | +20-40% | +50% |

### Validación Necesaria (Bajo Riesgo)

La única incertidumbre real de v2.0 está en:
1. **Consumo real de desgasificación** → Prueba laboratorio €50k, 1 mes
2. **Fatiga acero 0.3 atm** → Ensayo estándar €30k, 2 meses
3. **EIA descarga 50m** → Modelo hidrodinámico €80k, 2 meses
4. **Turbina Pelton agua salada** → Consulta fabricante €20k, 1 mes

**Total Fase -1: ~€200k y 3 meses para validar TODAS las incertidumbres.**

---

*Documento comparativo v2.0 — Marzo 2026 — Central Hidroeléctrica Submarina*
