import CardBase from './Card.svelte';
import CardContent from './CardContent.svelte';
import CardDescription from './CardDescription.svelte';
import CardHeader from './CardHeader.svelte';
import CardMeta from './CardMeta.svelte';

const Card = CardBase;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Meta = CardMeta;
Card.Header = CardHeader;

export default Card;
