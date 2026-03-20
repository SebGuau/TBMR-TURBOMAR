# Análisis Crítico: Problemas Reales

---

## 1. Introducción

Esta sección examina sin filtros los riesgos reales del proyecto. Un proyecto serio incluye su propia crítica. Los riesgos son REALES, pero manejables con diligencia.

---

## 2. Riesgos Técnicos

### 2.1 Hermeticidad Cámara (CRÍTICO)

Si hay fugas pequeñas, presión sube, flujo baja.

- Exposición: 500m profundidad, presión 50 atm
- Probabilidad: MEDIA (sistemas marinos histórico: 15% fuga en 10 años)
- Consecuencia: Parada 1-3 meses, reparación €500k

**Mitigación:** Inspecciones cada 6 meses, diseño redundante, monitoreo continuo presión.

### 2.2 Corrosión Marina (INEVITABLE)

Agua salada corroe acero en 5-10 años sin protección.

- Costo mantenimiento: €50k/año ánodos + revestimiento
- Riesgo si se descuida: Fallo estructural

**Mitigación:** Ánodos sacrificio cada 5m, revestimiento epoxídico 3-5mm, inspecciones NDT cada 2 años.

### 2.3 Cavitación Turbina (EVITABLE)

A presiones bajas en cámara, burbujas pueden dañar turbina.

- Presión mínima cámara: 0.7 atm (diseño actual)
- Número cavitación σ = 47.1 → NO hay cavitación en condiciones normales

**Mitigación:** Diseño anti-cavitación, presión mínima 0.7 atm, válvulas de control automático.

---

## 3. Riesgos Económicos

### 3.1 CAPEX Puede Ser Mayor (PROBABLE)

Estimación €89M es realista pero proyectos offshore siempre tienen sorpresas:

- Marineros siempre cuestan más (factor 1.5x típico)
- Sorpresas submarinas: suelo, corrientes, geología
- Retrasos permisos ambientales

**Realista:** €100-120M en caso adverso (vs €89M estimado)
**Impacto:** Payback sin sequía sube de 9.3 a 11-13 años

### 3.2 OPEX Mayor Esperado

Mantenimiento submarino es caro. Estimé €8-10M, podría ser €10-13M en escenario adverso.

**Impacto:** Beneficio baja 20-30%, payback aumenta proporcionalmente.

### 3.3 Precio Electricidad Volátil

Estimé €80/MWh, pero:

- Precio puede caer a €50/MWh (escenario pesimista)
- Precio puede subir a €100/MWh (escenario optimista)

**Mitigación:** Contrato PPA a largo plazo (10-15 años, precio fijo €70-80/MWh).

---

## 4. Riesgos Regulatorios

### 4.1 Permisos Ambientales (CRÍTICO)

EIA en España para proyectos marinos puede tomar 3-5 años (vs 18 meses estimado).

- Puede rechazarse si impacto marino "inaceptable"
- Conflictos con pesca artesanal y conservación marina

**Probabilidad:** MEDIA
**Mitigación:** Comenzar EIA inmediatamente (€300-500k), contratar gestores regulatorios especializados.

### 4.2 Derechos de Explotación Marina

Marco legal a 500m en aguas españolas aún en desarrollo:

- Posibles conflictos con pesca
- Posible necesidad de licitación pública

**Mitigación:** Coordinación temprana con MITECO y Demarcación de Costas.

### 4.3 Cambios Normativa

Gobierno puede cambiar reglas del mercado energético.

**Mitigación:** Diversificación ingresos (electricidad + agua desalinizada).

---

## 5. Riesgos Operacionales

### 5.1 Instalación Submarina Compleja (ALTA PROBABILIDAD)

Operaciones submarinas = impredecibles:

- Mala meteorología → retrasos
- Hallazgos en subfondo → rediseño
- Equipos especializados escasos y caros

**Costo:** +20-50% sobre presupuesto instalación es frecuente en proyectos offshore.

### 5.2 Mantenimiento Difícil

Reparar bajo agua es 3-5x más caro que en tierra:

- Tiempo: Semanas vs días
- Personal: Buzos altamente especializados, ROVs €5-20k/día + barco €15-50k/día

**Mitigación:** Diseño robusto, redundancia en componentes críticos, inspecciones preventivas.

---

## 6. Riesgos Financieros

### 6.1 Dificultad para Obtener Financiamiento

Bancos tradicionales rechazan proyectos con tecnología "nueva":

- Sin historial de operación
- Riesgo ambiental desconocido
- Instalación offshore = sobrecostes frecuentes

**Mitigación:** Buscar fondos CleanTech especializados, ECA (agencias estatales), Horizonte Europa.

### 6.2 Tasas de Interés

Si tasas suben de 6% a 10%:

- VAN baja 20-30%
- Refinanciación costosa

**Mitigación:** Financiar a tasa fija durante construcción y primeros años.

---

## 7. Escenario Pesimista (Muy Malo)

| Parámetro | Valor adverso |
|---|---|
| CAPEX | €120M |
| OPEX | €12M/año |
| Precio electricidad | €60/MWh |
| Disponibilidad | 85% |
| Sin agua (sin sequía) | €0 extra |

```
Ingresos: 26.5 MW × 8760h × 0.85 × €60 = €11.8M/año
OPEX: €12M/año
Beneficio: -€0.2M/año (pérdidas)
```

**CONCLUSIÓN:** Proyecto no viable en escenario muy adverso simultáneo. Pero la probabilidad de que TODOS estos factores ocurran juntos es baja (<5%).

---

## 8. Escenario Optimista

| Parámetro | Valor favorable |
|---|---|
| CAPEX | €70M |
| OPEX | €5.7M/año |
| Precio electricidad | €100/MWh |
| Agua desalinizada (sequía moderada) | €10M/año extra |
| Disponibilidad | 96% |

```
Ingresos: €22M (electricidad) + €10M (agua) = €32M/año
OPEX: €5.7M/año
Beneficio: €26.3M/año
Payback: €70M / €26.3M = 2.7 años
```

**CONCLUSIÓN:** Proyecto muy atractivo en escenario favorable.

---

## 9. Qué Podría Hacer Fracasar el Proyecto

1. **Falla hermeticidad cámara persistente:** Parada prolongada, costo €1M+
2. **Corrosión acelerada inesperada:** Reemplazo tubería, costo €5-10M
3. **Rechazo permiso ambiental:** Proyecto bloqueado o reubicado
4. **Sobrecoste instalación >50%:** +€50M gasto extra
5. **No conseguir financiamiento:** Proyecto no se construye
6. **Precio electricidad cae al 30%:** Ingresos insuficientes para OPEX
7. **Descubrimiento geológico adverso:** Suelo impropio, reubicación requerida

**Probabilidad de al menos uno en 20 años:** ~35-40%

---

## 10. Recomendación: Es Viable Si

✅ Se hace Fase 0 primero (validación piloto 22 meses, €9M)
✅ Se obtiene financiamiento específico (fondos CleanTech / ECA)
✅ Se negocian contratos PPA a largo plazo (precio fijo electricidad)
✅ Se diseña para resiliencia marina (corrosión, hermeticidad)
✅ Se implementa operación robusta (24/7, inspecciones)

❌ NO es viable si:
- Se omite la Fase 0 de validación
- No se consigue financiamiento
- Gobierno rechaza todos los permisos ambientales
- Instalación sale >80% más cara de lo estimado

---

## 11. Conclusión Honesta

Proyecto tiene riesgos REALES, no es "mágico".

Pero los riesgos son **manejables con diligencia** y están dentro del rango normal para proyectos de infraestructura offshore.

Payback 3-10 años (según ciclo hidrológico) es **aceptable para infraestructura marina**.

**NO es para inversores pasivos o pequeños.**
**ES PARA:** Fondos de infraestructura, gobiernos, consorcios especializados con apetito offshore.
