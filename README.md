# Descripción

jquery.proximoferiado es un plugin de JQuery que le permite obtener la cantidad de días que faltan para el próximo feriado en su país.

# Cómo usarlo

La forma más básico de invocar el plugin es sin pasarle ningún parámetro, de esta forma
el plugin usa los parámetros que tiene por defecto.

	$('#proximoferiado').proximoferiado();

Ahora dentro del elemento con id proximoferiado se cargara el texto "Faltan x día(s) para el próximo feriado.",
donde x será reemplazado por la cantidad de días que faltan para el príximo feriado en Argentina (país por defecto).

# Opciones

## country

Establece el país para el cual se está consultando la cantidad de días que faltan para
el próximo feriado.

Valores posibles: "AR", "CL" y "MX".
Valor por defecto: "AR".

## text_before

El texto que se antepone a la cantidad de días.

Valor por defecto: "Faltan".

## text_after

El texto que se anexa al final de la cadena.

Valor por defecto: "para el próximo feriado.".

## text_day

El texto en singular para los días.

Valor por defecto: "día".

## text_days

El texto en plural para los días.

Valor por defecto: "días".