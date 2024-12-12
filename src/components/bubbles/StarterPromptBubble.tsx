type Props = {
  prompt: string;
  onPromptClick?: () => void;
  starterPromptFontSize?: number;
};
export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble starter-prompt"
        data-testid="host-bubble"
        style={{
          width: '100%',
          'font-size': props.starterPromptFontSize ? `${props.starterPromptFontSize}px!important` : '15px!important', // Convert to string with unit
          'border-radius': '15px',
          cursor: 'pointer',
          'background-color': 'var(--color-primary)',
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);
