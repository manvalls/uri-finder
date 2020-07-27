declare module 'uri-finder' {
  function find(uri: string): string[];
  function find(
    uri: string,
    matcher: (
      uri: string,
      scheme?: string,
      userinfo?: string,
      host?: string,
      port?: string,
      path?: string,
      query?: string,
      fragment?: string
    ) => void
  ): void;

  function replace(
    uri: string,
    replacement:
      | ((
          uri: string,
          scheme?: string,
          userinfo?: string,
          host?: string,
          port?: string,
          path?: string,
          query?: string,
          fragment?: string
        ) => string)
      | string
  ): string;
}
