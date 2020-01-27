package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class ToolRestfulTest extends AbstractRestfullTest {
	@Test
	public void shouldReturnAllProjects() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.TOOLS, 200, "tool/all.json");
	}

	@Test
	public void shouldReturnProjectWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.TOOLS + "1", 200, "tool/1.json");
	}

}
