# Ingeniería de Diseño — Especificaciones Técnicas

---

## 1. Componente 1: Tubería Submarina

### 1.1 Especificación de Tubería

| Parámetro | Valor |
|---|---|
| Material | Acero al carbono con revestimiento epoxídico |
| Diámetro interior | 2.0 m |
| Diámetro exterior | 2.1 m |
| Espesor pared | 8-12 mm |
| Longitud | 500 m (+ 50m excedente) |

### 1.2 Cálculo de Espesor Mínimo (Fórmula Barlow)

```
t = (P × D) / (2 × S × E - P × Y)

P = 50.66 bar   D = 2000 mm
S = 250 MPa     E = 0.85    Y = 0.4

t = (50.66 × 2000) / (2 × 250 × 0.85 - 50.66 × 0.4)
t = 101,320 / 404.74 = 250 mm (teórico)

En práctica: 8-12 mm (esfuerzo diferencial mínimo,
presión interior ≈ presión exterior)
```

### 1.3 Protección y Recubrimiento

- **Epoxídico:** 3-5 mm de espesor
- **Ánodos de sacrificio:** Zinc/aluminio, cada 5 metros
- **Reemplazo ánodos:** Cada 3-5 años

### 1.4 Inspección y Mantenimiento

| Tarea | Frecuencia |
|---|---|
| Inspección visual ROV | Anual |
| NDT ultrasonidos | Cada 2 años |
| Limpieza exterior (anillos rasadores) | Cada 3 meses |
| Limpieza interior (pig) | Cada 12 meses |

### 1.5 Costo Tubería

| Item | Costo |
|---|---|
| Material | €500-800/m |
| Instalación submarina | €2,000-5,000/m |
| **TOTAL 500m** | **€1.25-2.9M** |

---

## 2. Componente 2: Cámara de Presión Diferencial

### 2.1 Especificación

| Parámetro | Valor |
|---|---|
| Forma | Cilindro horizontal sellado |
| Diámetro interior | 3.0 m |
| Longitud | 10 m |
| Volumen | 70.7 m³ |
| Presión operativa | 0.5-1.5 atm (controlada) |
| Presión de diseño | 50 atm (factor seguridad emergencias) |
| Material | Acero inoxidable 316L |

### 2.2 Accesos y Conexiones

- Entrada: Tubo 2.0m desde profundidad
- Salida turbina: Tubo 1.5m hacia turbina
- Salida agua: Tubo 1.0m sifón
- Acceso bomba vacío: Tubo 0.3m con válvula de alivio
- Puerto inspección: Escotilla sumergible

### 2.3 Sistema de Control

| Elemento | Especificación |
|---|---|
| Válvula de alivio | 50 atm (emergencia) |
| Válvula de retención | Previene reflujo |
| Sensor de presión | 0-50 atm, salida 4-20mA |
| Sensor de flujo | Ultrasónico |
| PLC | Siemens S7 |

### 2.4 Costo Cámara

| Item | Costo |
|---|---|
| Diseño y fabricación | €1.5-2M |
| Válvulas y control | €300-500k |
| Instalación | €800k |
| **TOTAL** | **€2.6-3.3M** |

---

## 3. Componente 3: Turbina Pelton

### 3.1 Especificación

| Parámetro | Valor |
|---|---|
| Tipo | Pelton de alta presión, diseño submarino |
| Potencia nominal | 32 MW |
| Velocidad de rotación | 600 RPM |
| Caudal | 7.85 m³/s |
| Presión de entrada | 1.5 atm = 152 kPa |
| Diámetro rotor | 1.8 m |
| Número de álabes | 24-30 |

### 3.2 Eficiencia

| Parámetro | Valor |
|---|---|
| Eficiencia mecánica | 87% |
| Eficiencia volumétrica | 98% |
| Eficiencia total | 85% |

### 3.3 Materiales

| Componente | Material |
|---|---|
| Rotor | Acero inoxidable 316L |
| Álabes | Bronce al manganeso |
| Carcasa | Acero inoxidable |
| Cojinetes | Rodillos, lubricación por aceite presurizado |

### 3.4 Costo Turbina

| Item | Costo |
|---|---|
| Turbina Pelton submarina | €12-15M |
| Ingeniería especializada | €1-2M |
| **TOTAL** | **€13-17M** |

---

## 4. Componente 4: Bomba Vacío

### 4.1 Especificación

| Parámetro | Valor |
|---|---|
| Tipo | Compresor de desplazamiento positivo |
| Potencia | 1.5-2 MW eléctricos |
| Setpoint presión cámara | 0.7 atm |
| Ubicación | En tierra, caseta de control |

### 4.2 Sistema de Control

```
PLC monitoriza presión cámara
Si P sube → Bomba aumenta potencia
Si P baja → Bomba reduce potencia
Setpoint automático: 0.7 atm
```

### 4.3 Costo

| Item | Costo |
|---|---|
| Compresor rotativo | €800k-1.2M |
| Sistema control | €200k |
| Tubo especializado | €300-500k |
| Instalación | €300k |
| **TOTAL** | **€1.6-2.2M** |

---

## 5. Componente 5: Sistema de Desalojo (Sifón)

### 5.1 Especificación

| Parámetro | Valor |
|---|---|
| Tipo | Sifón con válvula de alivio |
| Diámetro | 1.0 m |
| Material | Acero inoxidable |
| Longitud | 550 m total |

### 5.2 Costo

| Item | Costo |
|---|---|
| Tubo acero inoxidable | €400k |
| Válvula de alivio | €100k |
| Instalación submarina | €300k |
| **TOTAL** | **€800k** |

---

## 6. Componente 6: Generador Eléctrico

### 6.1 Especificación

| Parámetro | Valor |
|---|---|
| Tipo | Generador síncrono de imanes permanentes |
| Potencia | 32 MW |
| Velocidad | 600 RPM |
| Voltaje | 11 kV |
| Frecuencia | 50 Hz |
| Factor de potencia | 0.95 |

### 6.2 Conexión a Red

```
Transformador elevador: 11kV → 33 kV (pérdida 2%)
Cable submarino: 33 kV, armado, 10 km hacia tierra
Estación receptora: En tierra
```

### 6.3 Costo

| Item | Costo |
|---|---|
| Generador | €4-6M |
| Transformador | €400-600k |
| Cable submarino 10 km | €2-3M |
| Estación receptora | €1-1.5M |
| **TOTAL** | **€7.4-11.1M** |

---

## 7. Resumen de Componentes

| Componente | Especificación | Costo (M€) |
|---|---|---|
| Tubería 500m | Acero 2m Ø | 1.25-2.9 |
| Cámara | Cilindro 3m × 10m | 2.6-3.3 |
| Turbina Pelton | 32 MW, submarina | 13-17 |
| Bomba vacío | 1.5-2 MW | 1.6-2.2 |
| Sistema desalojo | Sifón + válvula | 0.8 |
| Generador | 32 MW, 11kV | 7.4-11.1 |
| Auxiliares | Cables, válvulas | 2-3 |
| **TOTAL CAPEX** | | **32-41 M€** |

**CAPEX realista ajustado** (con contingencias 30-50%): **€42-60M**
