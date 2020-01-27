package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class ProjectRestfulTest extends AbstractRestfullTest {
	@Test
	public void shouldReturnAllProjects() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.PROJECT, 200, "project/all.json");
	}

	@Test
	public void shouldReturnProjectWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.PROJECT + "1", 200,
				"project/1.json");
	}

}
