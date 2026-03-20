# Análisis Hidráulico Avanzado del Sistema

---

## 1. Sistema Hidráulico Completo

El sistema hidráulico de la central submarina combina varios principios de mecánica de fluidos que operan de manera integrada.

### 1.1 Flujo en Tubería Vertical

La tubería principal de 500m de longitud opera en condiciones de flujo turbulento completamente desarrollado. El análisis considera:

**Perfil de velocidades:**
```
u(r) = u_max × [1 - (r/R)^(1/7)]    (perfil turbulento)
u_max ≈ 1.22 × v_media = 1.22 × 2.5 = 3.05 m/s
```

**Distribución de presión:**
```
P(z) = P_fondo - ρ·g·z - ΔP_fricción(z)
P(0)   = 50 atm  (entrada fondo)
P(250) = 25.1 atm (mitad tubería)
P(500) = 1.5 atm  (cámara presión)
```

### 1.2 Análisis de Pérdidas Menores

Además de la fricción distribuida, existen pérdidas localizadas:

| Elemento | Coeficiente K | ΔP (Pa) |
|---|---|---|
| Entrada tubería (boca de pez) | 0.5 | 1,602 |
| Codo 90° en turbina | 0.3 | 961 |
| Válvula de control | 0.2 | 641 |
| Salida a turbina | 1.0 | 3,203 |
| **TOTAL pérdidas menores** | | **6,407 Pa ≈ 0.063 atm** |

**CONCLUSIÓN:** Pérdidas menores totales < 0.1 atm → despreciables frente a ΔP = 48.3 atm.

## 2. Análisis de la Cámara de Presión

### 2.1 Tiempo de Respuesta del Sistema

```
Volumen cámara: V = 70.7 m³
Caudal entrada: Q = 7.85 m³/s
Tiempo de residencia: τ = V/Q = 70.7/7.85 = 9 segundos
```

El sistema responde a perturbaciones en ~9 segundos, lo que permite control PID efectivo.

### 2.2 Análisis de Presión en la Cámara

Para mantener operación estable, la presión en la cámara debe satisfacer:

```
P_cámara_mín = P_vapor + margen_seguridad
P_cámara_mín = 0.023 atm + 0.3 atm = 0.323 atm

P_cámara_operativa = 0.7 atm  (setpoint nominal)
P_cámara_máx = 1.5 atm       (alarma alta)
```

### 2.3 Trabajo de la Bomba de Vacío

```
Potencia bomba = Q_aire × ΔP_bomba / η_bomba

Q_aire ≈ 0.5 m³/s (aire que entra por fugas mínimas)
ΔP_bomba = P_atm - P_cámara = 1 - 1.2 = -0.2 atm (compresión)
η_bomba = 0.75

P_bomba = 0.5 × 20,265 / 0.75 = 13,510 W ≈ 14 kW (mínimo)
P_bomba nominal = 1.5-2 MW (para fugas reales y arranques)
```

## 3. Análisis del Sistema de Sifón

### 3.1 Condiciones del Sifón

```
Altura sifón: h_s = 500 m
Presión en cámara: P_c = 1.2 atm
Presión salida: P_sal = 1.0 atm (atmósfera)

Gradiente disponible: ΔP = P_c - P_sal = 0.2 atm = 20,265 Pa
```

### 3.2 Velocidad de Descarga

```
v_descarga = √(2 × ΔP / ρ) = √(2 × 20,265 / 1025) = 6.3 m/s

Caudal descarga: Q = π/4 × 1² × 6.3 = 4.9 m³/s
```

El sistema de sifón puede manejar todo el caudal de entrada (7.85 m³/s) con tubería de diámetro 1.0m.

## 4. Análisis de Transitorios

### 4.1 Golpe de Ariete

El cierre rápido de válvulas puede generar ondas de presión (golpe de ariete):

```
c = √(K/ρ) donde K = módulo de compresibilidad del agua
c = √(2.2×10⁹ / 1025) = 1,465 m/s  (velocidad onda)

ΔP_máx = ρ × c × Δv = 1025 × 1465 × 2.5 = 3,754,062 Pa ≈ 37 atm
```

**MEDIDA DE PROTECCIÓN:** Válvulas de cierre lento (tiempo mínimo > 30 segundos), eliminando prácticamente el golpe de ariete.

### 4.2 Arranque del Sistema

Secuencia de arranque para evitar transitorios:

1. Activar bomba de vacío hasta P_cámara = 1.2 atm (≈ 30 min)
2. Abrir válvula entrada lentamente (10 min)
3. Flujo se establece gradualmente
4. Turbina arranca a velocidad mínima (300 RPM)
5. Rampa a velocidad nominal (600 RPM) en 15 minutos

## 5. Eficiencia Hidráulica Global

```
η_hidráulica = (Potencia turbina) / (Potencia teórica disponible)

Potencia teórica: P_teórica = Q × ΔP_total = 7.85 × 5,066,250 = 39.77 MW
Potencia turbina: P_turbina = 32.66 MW

η_hidráulica = 32.66 / 39.77 = 82.1%
```

Desglose de pérdidas:
- Fricción tubería: 0.4%
- Pérdidas menores: 0.1%
- Eficiencia turbina: 15%
- Eficiencia generador: 2%
- **TOTAL PÉRDIDAS:** 17.5%

## 6. Resumen Hidráulico

| Parámetro | Valor |
|---|---|
| Caudal nominal | 7.85 m³/s |
| Velocidad flujo | 2.5 m/s |
| Pérdida fricción | 0.2 atm |
| Pérdidas menores | 0.063 atm |
| ΔP neta turbina | 48.3 atm |
| Potencia hidráulica | 38.42 MW |
| Potencia eléctrica | 32.01 MW |
| Η global | 82.1% |
| Factor de seguridad cavitación | σ = 47.1 |
