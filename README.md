# ngx-vflow

ngx-vflow is an Angular library for creating node-based applications. It aims to assist you in building anything from a static diagram to a visual editor. You can utilize the default design or apply your own by customizing everything using familiar technologies.

## Installation

```
npm i ngx-vflow --save
```

## Basic Example

The following code describes 3 nodes and creates 2 edges between them.

```ts
@Component({
  template: `<vflow [nodes]="nodes" [edges]="edges" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [VflowModule]
})
export class DefaultEdgesDemoComponent {
  public nodes: Node[] = [
    {
      id: '1',
      point: { x: 10, y: 200 },
      type: 'default',
      text: '1'
    },
    {
      id: '2',
      point: { x: 200, y: 100 },
      type: 'default',
      text: '2'
    },
    {
      id: '3',
      point: { x: 200, y: 300 },
      type: 'default',
      text: '3'
    },
  ]

  public edges: Edge[] = [
    {
      id: '1 -> 2',
      source: '1',
      target: '2'
    },
    {
      id: '1 -> 3',
      source: '1',
      target: '3'
    },
  ]
}
```

The code above renders to this:

<img width="400" alt="image" src="https://github.com/artem-mangilev/ngx-vflow/assets/53087914/d9a920d8-5114-489a-acb4-031239fcdf35">

For more complex example you may see the documentation: https://www.ngx-vflow.org/

## API

`vflow` component API is described here: https://www.ngx-vflow.org/api/ngx-vflow/classes/VflowComponent

## License 

MIT
