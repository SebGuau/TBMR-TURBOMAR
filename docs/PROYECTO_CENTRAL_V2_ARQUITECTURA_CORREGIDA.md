# ARQUITECTURA v2.0: TURBINA EN SUPERFICIE

**Documento:** Arquitectura Corregida v2.0
**Fecha:** Marzo 2026
**Estado:** Propuesta técnica validable

---

## I. Cambio Fundamental de Arquitectura

### Problema v1.0
- Turbina y cámara a 500m profundidad
- Cámara: diferencial 49.3 atm (riesgo implosión catastrófica)
- Mantenimiento imposible en caso de fallo (2-3 meses downtime)
- Costo estructural: €15-20M solo cámara de presión

### Solución v2.0
- Turbina en superficie (plataforma flotante o instalación costera)
- Cámara en superficie: diferencial 0.3 atm (SEGURO, factor >3:1)
- Mantenimiento en 1 día (acceso directo sin ROV)
- Costo cámara: €2-3M (-80%)

### Diagrama Arquitectura v2.0

```
FONDO MARINO (500m):
└─ Entrada agua (abertura abierta)
   └─ Presión: 50 atm
      └─ Tubería ascendente (500m, acero 2m Ø)
         └─ Fricción: 0.17 atm

SUPERFICIE (Plataforma flotante o costa):
├─ Separador de gases (desgasificador)
│  ├─ Entrada: agua marina saturada en gases
│  └─ Salida: agua pre-desgasificada → reduce carga bomba vacío
│
├─ Cámara de presión (superficie)
│  ├─ Interno: 0.7 atm
│  ├─ Externo: 1 atm
│  └─ Diferencial: 0.3 atm (SEGURO — factor seguridad >3:1)
│
├─ 2× Turbina Pelton (13 MW cada una)
│  ├─ Modo A: Turbina 1 activa = 13 MW (fallo Turbina 2)
│  ├─ Modo B: Turbina 2 activa = 13 MW (fallo Turbina 1)
│  └─ Modo Normal: Ambas activas = 26 MW
│
├─ Generador síncrono 32 MW
│  └─ Transformador 11kV → 33kV
│
├─ Bomba de vacío (2-2.5 MW, vs 3-4 MW en v1.0)
│  └─ Función: Mantener 0.7 atm en cámara
│
└─ Sistema descarga ambiental
   ├─ Tubería descarga (1.0m Ø)
   ├─ Profundidad: 50-100m (NO superficie)
   └─ Difusor: Dispersión múltiples orificios
```

---

## II. Balance Energético v2.0

### Potencia Disponible

```
Presión entrada (marino 500m): 50 atm
Fricción tubería (2m Ø, 500m): -0.17 atm
Presión cámara: -0.7 atm
PRESIÓN NETA PARA TURBINA: 49.13 atm

Caudal: 7.85 m³/s (IGUAL a v1.0)
Potencia bruta: 7.85 × 491,300 Pa = 38.6 MW
```

### Consumos de Energía

```
Bomba de vacío (con desgasificador): -2.0 MW
(vs -3.5 MW en v1.0 sin desgasificador)

Generador (98% eficiencia): -0.8 MW

POTENCIA DISPONIBLE PARA TURBINAS: 35.8 MW
```

### Reparto Entre Turbinas

```
Turbina A: 13 MW (operación normal)
Turbina B: 13 MW (operación normal)
TOTAL OPERACIÓN NORMAL: 26 MW
Margen de seguridad / cavitación: 9.8 MW (disponibles)
```

---

## III. Costo del Cambio Arquitectónico

### CAPEX Comparativa

```
COMPONENTE                  v1.0            v2.0            DELTA
──────────────────────────────────────────────────────────────
Tubería 500m 2m Ø           €400k           €400k           ±0
Cámara presión              €15-20M         €2-3M           -€13-17M
Instalación submarina       €2-3M           €1.5-2M         -€0.5-1M
Plataforma flotante         ±0              €2-3M           +€2-3M
2× Turbinas (redundancia)   €3-5M           €4-6M           +€1-2M
Desgasificador              ±0              €0.5-1M         +€0.5-1M
Descarga 50-100m            ±0              €0.3-0.5M       +€0.3-0.5M
──────────────────────────────────────────────────────────────
Turbina+Generador           €15M            €15M            ±0
Bomba vacío                 €1M             €1M             ±0
Desalinización OI           €25M            €25M            ±0
Instalación total           €14M            €12-13M         -€1-2M
Contingencias 10%           €7M             €6.5M           -€0.5M
──────────────────────────────────────────────────────────────
CAPEX TOTAL                 €79-85M         €68.5-74.5M     -€10.5-16.5M

ESTIMADO PROMEDIO: €70M (v1.0) → €65M (v2.0)
```

### OPEX Comparativa

```
COMPONENTE                  v1.0            v2.0            DELTA
──────────────────────────────────────────────────────────────
Personal (3 operadores)     €200k           €200k           ±0
Mantenimiento tubería       €470k           €470k           ±0
Mantenimiento turbinas      €700k (ROV)     €450k           -€250k
Bomba vacío (energía)       €1.7M (3.5MW)   €1.2M (2.5MW)   -€0.5M
Membranas OI                €800k           €800k           ±0
Inspecciones NDT            €100k           €100k           ±0
Monitoreo ambiental         ±0              €200k           +€200k
Seguros/permisos            €600k           €600k           ±0
──────────────────────────────────────────────────────────────
OPEX TOTAL                  €8.0-9.0M       €6.6-7.2M       -€1.5-2.5M
```

---

## IV. Nueva Proyección Financiera v2.0

### Escenarios de Ingresos (IGUAL a v1.0)

```
Sin sequía (40% prob):         €17.6M/año (solo electricidad)
Sequía moderada (40% prob):    €17.6M + €5.4M = €23M/año
Sequía extrema (20% prob):     €17.6M + €13.5M = €31.1M/año

PROMEDIO PONDERADO: €21.6M/año
```

### Payback y ROI v2.0

```
CAPEX: €65M (promedio v2.0)
OPEX: €6.9M/año (promedio v2.0)
Ingresos: €21.6M/año
Beneficio neto: €21.6M - €6.9M = €14.7M/año

PAYBACK: €65M / €14.7M = 4.4 años
ROI anual: €14.7M / €65M = 22.6%

vs v1.0 (€70M CAPEX, €8M OPEX):
Beneficio v1.0 = €21.6M - €8M = €13.6M
Payback v1.0 = €70M / €13.6M = 5.1 años
MEJORA PAYBACK: -0.7 años (-14%)
```

### LCOE v2.0

```
LCOE = (CAPEX + OPEX_VAN) / Energía_25años

v1.0: (€70M + €200M) / 5,495 GWh = €49/MWh (solo electricidad)
v2.0: (€65M + €175M) / 5,495 GWh = €43.6/MWh (solo electricidad)
      Con ingresos agua: €37/MWh efectivo

MEJORA: -€5.4/MWh (-11%) solo electricidad
        -€12/MWh (-24%) incluyendo valor agua
```

---

## V. Riesgos Residuales y Mitigación

### Riesgo: Desgasificación Imperfecta
- **Mitiga:** Prueba laboratorio Fase -1 (tanque presión)
- **Contingencia:** Aumentar bomba de vacío +0.5 MW si necesario

### Riesgo: Fatiga Acero Cámara (Mareas)
- **Mitiga:** Factor seguridad >3:1 (vs 1.2:1 submarino)
- **Contingencia:** Inspección NDT cada 2 años

### Riesgo: Corrosión Marina en Plataforma
- **Mitiga:** Ánodos sacrificio + revestimiento epoxídico
- **Contingencia:** Reemplazo ánodos cada 3 años (€50k)

### Riesgo: Impacto Ambiental Descarga 50-100m
- **Mitiga:** Monitoreo clorofila y temperatura continuo
- **Contingencia:** Ajustar profundidad descarga a 100-150m si EIA exige

---

## VI. Roadmap Fase -1 (3 meses, coste estimado €200k)

### 1. Validación Desgasificación
- Prueba tanque presión 50 atm con agua marina real
- Medir volumen gas liberado al bajar a 0.7 atm
- Validar consumo bomba vs estimación (2-2.5 MW target)

### 2. Ensayo Fatiga Acero
- Material: 316L (mismo cámara v2.0)
- Ciclos: 100,000 (equivalente a 5-7 años de mareas)
- Diferencial: 0.3 atm (máximo operacional)
- Criterio éxito: Sin grietas, stress < 50% yield

### 3. Modelo Hidrodinámico
- Simular descarga 7.85 m³/s a 50m profundidad
- Validar: Dispersión >90% a 500m radio
- EIA: Presentar resultados para pre-aprobación regulatoria

### 4. Selección Turbina Pelton Final
- Especificar: RPM, material, eficiencia con agua salada
- Validar: No cavita a 0.7 atm salida
- Certificación: DNV/ABS para ambiente marino

---

*Documento técnico v2.0 — Marzo 2026 — Central Hidroeléctrica Submarina*
