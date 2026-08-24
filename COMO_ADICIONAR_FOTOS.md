# Como adicionar as fotos dos médicos e lideranças

## Regra mais importante

Todas as fotos devem ser salvas dentro de:

`imgs/medicos/`

Se você mantiver os nomes abaixo exatamente iguais, **não precisará alterar o caminho da imagem no HTML**.

## Lideranças gerais da página inicial

| Área | Nome do arquivo da foto |
| --- | --- |
| Direção Médica | `direcao-medica.jpg` |
| Direção Assistencial | `direcao-assistencial.jpg` |
| Centro Cardiovascular | `cardiologia.jpg` |
| Centro de Neurociências | `neurologia.jpg` |
| Centro de Oncologia | `oncologia.jpg` |
| Centro Materno-Infantil | `materno-infantil.jpg` |

## Chefes das especialidades

| Especialidade | Nome do arquivo da foto |
| --- | --- |
| Cardiologia | `cardiologia.jpg` |
| Neurologia | `neurologia.jpg` |
| Ortopedia | `ortopedia.jpg` |
| Pediatria | `pediatria.jpg` |
| Oncologia | `oncologia.jpg` |
| Ginecologia & Obstetrícia | `ginecologia-obstetricia.jpg` |
| Gastroenterologia | `gastroenterologia.jpg` |
| Endocrinologia | `endocrinologia.jpg` |
| Dermatologia | `dermatologia.jpg` |
| Urologia | `urologia.jpg` |
| Oftalmologia | `oftalmologia.jpg` |
| Psiquiatria | `psiquiatria.jpg` |

## Exemplo prático

Se a chefe da Cardiologia for a Dra. Helena Conti:

1. escolha a foto dela;
2. converta/salve como JPG;
3. renomeie para `cardiologia.jpg`;
4. coloque o arquivo em `imgs/medicos/` substituindo o JPG de exemplo;
5. no `index.html`, procure pelo card `Centro Cardiovascular` e troque:

`Nome do(a) responsável`

pelo nome desejado;

6. na página `especialidades/cardiologia.html`, faça a mesma alteração no `<h3>` da seção `Liderança da área`.

A foto aparecerá automaticamente nos dois locais porque ambos usam `cardiologia.jpg`.

## Como alterar o nome e o cargo

Em cada card, procure por:

```html
<h3>
  Nome do(a) responsável
</h3>
```

Troque apenas o texto, por exemplo:

```html
<h3>
  Dra. Helena Conti
</h3>
```

O texto logo abaixo pode ser usado para cargo, área de atuação ou uma mini descrição.

## Formato recomendado

- use `.jpg`;
- foto vertical/retrato;
- aproximadamente 800 × 1000 px ou maior;
- deixe uma pequena margem acima da cabeça;
- prefira fundo neutro ou institucional;
- mantenha o rosto centralizado.

## Se quiser usar PNG

É possível, mas nesse caso você também terá que alterar `.jpg` para `.png` no atributo `src` correspondente do HTML. Para facilitar a manutenção, recomendo manter todos os arquivos em JPG.
