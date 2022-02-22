import GridBase from './Grid.svelte';
import GridRow from './GridRow.svelte';
import GridColumn from './GridColumn.svelte';

const Grid = GridBase;
Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;
